import { createGlobalStyle } from "styled-components";

import espyBold from "../assets/Espy-Bold.ttf";
import espyRegular from "../assets/Espy-Regular.ttf";

export const FontFace = createGlobalStyle`
@font-face {
  font-family: 'Espy Bold';
  src: local('Espy-Bold'), url(${espyBold}) format('truetype');
}

@font-face {
  font-family: 'Espy Regular';
  src: local('Espy Regular'), url(${espyRegular}) format('truetype');
}
`;
