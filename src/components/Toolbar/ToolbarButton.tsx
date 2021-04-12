import React from "react";
import classnames from "classnames";

import styles from "./ToolbarButton.module.scss";

interface ToolbarButtonProps {
  children: React.ReactNode;
  onSelect: (event: React.MouseEvent) => void;
  active: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = (
  props: ToolbarButtonProps
): JSX.Element => {
  const { children, onSelect, active = false } = props;

  const onMouseDown = (event: React.MouseEvent): void => {
    onSelect(event);
  };

  const classes = classnames(styles.toolbarbutton, {
    [styles.active]: active,
  });

  return (
    <button onMouseDown={onMouseDown} className={classes}>
      {children}
    </button>
  );
};

export default ToolbarButton;
