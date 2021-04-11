import React from "react";

import "./Toolbar.scss";

import { Text } from "../Text";

export interface ToolbarProps {
  children: React.ReactChildren;
}

const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
  const { children } = props;
  return (
    <div className="Toolbar">
      <Text>File</Text>
      <Text>Edit</Text>
      <Text>View</Text>
    </div>
  );
};

export default Toolbar;
