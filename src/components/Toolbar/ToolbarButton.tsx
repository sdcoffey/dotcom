import React from "react";

import "./ToolbarButton.scss";

interface ToolbarButtonProps {
  children: React.ReactNode;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = (
  props: ToolbarButtonProps
): JSX.Element => {
  const { children } = props;

  return <button className="ToolbarButton">{children}</button>;
};

export default ToolbarButton;
