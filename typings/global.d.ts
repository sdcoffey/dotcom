import React from "react";

import { css } from "styled-components";
import { MenuItemProps } from "../src/components";

declare global {
  export type Css = ReturnType<typeof css>;
  declare module "*.ttf";

  export type Menu = {
    name?: string;
    component?: React.ReactNode;
    items: MenuItemProps[][];
  };

  export type ToolbarConfig = Menu[];

  export type App = React.ComponentType<Record<string, never>> & {
    static toolbarConfig: ToolbarConfig;
  };
}
