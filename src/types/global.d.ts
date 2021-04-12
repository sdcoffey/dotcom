import { css } from "styled-components";

declare module "*.ttf";

declare global {
  export type Css = ReturnType<typeof css>;
}
