import React from "react";
import styled from "styled-components";

import { FontFace } from "./style";

import background from "./assets/bg.jpeg";
import OSNine from "./OSNine";

import { WindowProvider } from "./components";

function App(): JSX.Element {
  return (
    <AppContainer>
      <FontFace />
      <WindowProvider>
        <OSNine />
      </WindowProvider>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});

  overflow: hidden;
`;

export default App;
