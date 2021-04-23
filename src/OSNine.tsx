import React from "react";
import styled from "styled-components";

import {
  ConnectedToolbar,
  useMakeWindow,
  useWindows,
  Text,
} from "./components";

const OSNine = (): JSX.Element => {
  const makeWindow = useMakeWindow();

  const newWindow = (): void => {
    makeWindow(SimpleApp, "Window 1");
  };

  return (
    <Container>
      <ConnectedToolbar />
      <WindowArea className="window-area" id="window-area">
        {useWindows()}
        <Button onClick={newWindow}>New Window</Button>
      </WindowArea>
    </Container>
  );
};

const SimpleApp = (): JSX.Element => <Text>"Test"</Text>;

SimpleApp.toolbarConfig = [
  {
    name: "File",
    items: [[{ text: "New File", onClick: (): void => {} }]], // eslint-disable-line @typescript-eslint/no-empty-function
  },
] as ToolbarConfig;

const Button = styled.button`
  position: absolute;
  top: 100px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const WindowArea = styled.div`
  height: 100%;
`;

export default OSNine;
