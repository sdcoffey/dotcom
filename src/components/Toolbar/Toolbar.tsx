import React from "react";

import ToolbarButton from "./ToolbarButton";
import macLogo from "../../assets/mac-logo.png";

import { Text } from "../Text";

import "./Toolbar.scss";

const Toolbar: React.FC<Record<string, never>> = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-group">
        <ToolbarButton>
          <img className="mac-logo" height={15} src={macLogo} />
        </ToolbarButton>
        <ToolbarButton>
          <Text>File</Text>
        </ToolbarButton>
        <ToolbarButton>
          <Text>Edit</Text>
        </ToolbarButton>
        <ToolbarButton>
          <Text>View</Text>
        </ToolbarButton>
      </div>
    </div>
  );
};

export default Toolbar;
