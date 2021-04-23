import React from "react";

import Toolbar from "./Toolbar";

import { useWindowContext } from "../../components";

const ToolbarProxy = (): JSX.Element => {
  const {
    state: { toolbarConfig },
  } = useWindowContext();
  return (
    <div>
      <Toolbar config={toolbarConfig} />
    </div>
  );
};

export default React.memo(ToolbarProxy);
