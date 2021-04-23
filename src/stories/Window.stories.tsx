import React from "react";

import {
  Text,
  Window,
  WindowProvider,
  useMakeWindow,
  useWindows,
} from "../components";

const SimpleApp = (): JSX.Element => <Text>"Test"</Text>;

SimpleApp.toolbarConfig = [] as ToolbarConfig;

const Provider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <WindowProvider>{children}</WindowProvider>;
};

const Template = (): JSX.Element => {
  const makeWindow = useMakeWindow();
  const newWindow = (): void => {
    makeWindow(SimpleApp, "Window 1");
  };

  const windows = useWindows();
  return (
    <div>
      {windows}
      <button onClick={newWindow}>New Window</button>
    </div>
  );
};

export const WindowStory = (): JSX.Element => {
  return (
    <Provider>
      <Template />
    </Provider>
  );
};

export default {
  title: "Components/Window",
  component: Window,
};
