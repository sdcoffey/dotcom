import React from "react";

import { produce } from "immer";

import Window, { WindowProps } from "./Window";

import { Build, Random } from "../../utils";

type WindowState = Omit<WindowProps, "children"> & {
  App: App;
};

type State = {
  toolbarConfig: ToolbarConfig;
  windows: WindowState[];
};

const initialState: State = {
  toolbarConfig: [],
  windows: [],
};

type WindowContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const defaultContext: WindowContext = {
  state: initialState,
  dispatch: () => undefined,
};

const Context = React.createContext<WindowContext>(defaultContext);

export const WindowProvider = (props: ProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const context = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

enum ActionType {
  FocusWindow = "FocusWindow",
  CreateWindow = "CreateWindow",
  CloseWindow = "CloseWindow",
  BlurAllWindows = "BlurAllWindows",
}

interface FocusWindowAction {
  type: ActionType.FocusWindow;
  windowId: string;
}

interface CreateWindowAction {
  type: ActionType.CreateWindow;
  payload: WindowState;
}

interface CloseWindowAction {
  type: ActionType.CloseWindow;
  windowId: string;
}

interface BlurAllWindowsAction {
  type: ActionType.BlurAllWindows;
}

const focusWindow = (windowId: string): FocusWindowAction => {
  return {
    type: ActionType.FocusWindow,
    windowId,
  };
};

const createWindow = (state: WindowState): CreateWindowAction => ({
  type: ActionType.CreateWindow,
  payload: state,
});

const closeWindow = (windowId: string): CloseWindowAction => ({
  type: ActionType.CloseWindow,
  windowId,
});

const blurAllWindows = (): BlurAllWindowsAction => ({
  type: ActionType.BlurAllWindows,
});

type Action =
  | FocusWindowAction
  | CreateWindowAction
  | CloseWindowAction
  | BlurAllWindowsAction;

function defocused(windows: WindowState[]): WindowState[] {
  return windows.map((window) => ({ ...window, focused: false }));
}

function reOrdered(windows: WindowState[]): WindowState[] {
  return windows.map((window, index) => ({ ...window, zIndex: index }));
}

function toolbarConfig(windows: WindowState[]): ToolbarConfig {
  return (
    windows.find((window) => window.focused)?.App.toolbarConfig ||
    initialState.toolbarConfig
  );
}

const reducer = (state: State = initialState, action: Action): State => {
  const newState = produce(state, (draft) => {
    switch (action.type) {
      case ActionType.FocusWindow: {
        const windowId = (action as FocusWindowAction).windowId;
        const window = draft.windows.find((elem) => elem.windowId === windowId);
        const windowIndex = draft.windows.findIndex((elem) => elem === window);

        if (window) {
          draft.windows.splice(windowIndex, 1);
          draft.windows = defocused(draft.windows);

          window.focused = true;
          draft.windows.push(window);
          draft.windows = reOrdered(draft.windows);

          draft.toolbarConfig = window.App.toolbarConfig;
        }
        return draft;
      }
      case ActionType.CreateWindow: {
        draft.windows = defocused(draft.windows);

        draft.windows.push(action.payload);
        draft.windows = reOrdered(draft.windows);
        draft.toolbarConfig = action.payload.App.toolbarConfig;

        return draft;
      }
      case ActionType.CloseWindow: {
        const windowId = (action as CloseWindowAction).windowId;
        const window = draft.windows.find((elem) => elem.windowId === windowId);
        const windowIndex = draft.windows.findIndex((elem) => elem === window);

        if (window) {
          draft.windows.splice(windowIndex, 1);

          if (draft.windows.length > 0) {
            draft.windows[draft.windows.length - 1].focused = true;
          }
        }
        draft.windows = reOrdered(draft.windows);
        draft.toolbarConfig = toolbarConfig(draft.windows);

        return draft;
      }
      case ActionType.BlurAllWindows: {
        draft.windows = defocused(draft.windows);
        draft.toolbarConfig = initialState.toolbarConfig;

        return draft;
      }
    }
    return draft;
  });

  if (Build.debug) {
    /* eslint-disable no-console */
    console.log("PREV STATE", state);
    console.log("ACTION", action);
    console.log("NEW STATE", newState);
    /* eslint-enable no-console */
  }

  return newState;
};

export const useWindowContext = (): WindowContext => React.useContext(Context);

export const useWindows = (): JSX.Element => {
  const {
    dispatch,
    state: { windows },
  } = useWindowContext();

  const windowRefs: Record<
    string,
    React.RefObject<HTMLDivElement>
  > = windows.reduce((obj, window) => {
    obj[window.windowId] = React.createRef<HTMLDivElement>();
    return obj;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const handleClick = (event: MouseEvent): void => {
    const windowIds = Object.keys(windowRefs);
    const clickedWindowId = windowIds.find((id) => {
      const ref = windowRefs[id];
      if (!ref.current) {
        return false;
      }

      return ref.current.contains(event.target as Node);
    });

    if (clickedWindowId) {
      dispatch(focusWindow(clickedWindowId));
    } else {
      dispatch(blurAllWindows());
    }
  };

  React.useEffect(() => {
    const windowArea = document.getElementById("window-area");
    windowArea?.addEventListener("mousedown", handleClick);

    return (): void => {
      windowArea?.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <>
      {windows.map(({ App, ...props }) => (
        <Window
          key={props.windowId}
          ref={windowRefs[props.windowId]}
          {...props}
        >
          {React.createElement(App)}
        </Window>
      ))}
    </>
  );
};

export function useMakeWindow(): (App: App, name: string) => void {
  const { dispatch } = useWindowContext();

  return (App: App, name: string): void => {
    const windowId = Random.makeid(32);
    const onClose = (): void => {
      dispatch(closeWindow(windowId));
    };

    const onFocus = (): void => {
      dispatch(focusWindow(windowId));
    };

    const initialState: WindowState = {
      App,
      name,
      windowId,
      focused: true,
      onFocus,
      onClose,
    };
    dispatch(createWindow(initialState));
  };
}
