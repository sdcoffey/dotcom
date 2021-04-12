import React from "react";

import ToolbarButton from "./ToolbarButton";
import macLogo from "../../assets/mac-logo.png";

import { Text } from "../Text";

import styles from "./Toolbar.module.scss";

const Toolbar: React.FC<Record<string, never>> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>();

  const toolbarButtonGroup = document.querySelector(`.${styles.toolbargroup}`);

  const onSelect = (i: number) => (event: React.MouseEvent): void => {
    event.preventDefault();
    setSelectedIndex(i);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    let toolBarContainsClick = false;
    if (event) {
      toolBarContainsClick =
        toolbarButtonGroup?.contains(event.target as Node) || false;
    }

    if (selectedIndex !== undefined && !toolBarContainsClick) {
      setSelectedIndex(undefined);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbargroup}>
        <ToolbarButton onSelect={onSelect(0)} active={selectedIndex === 0}>
          <img className={styles.maclogo} height={15} src={macLogo} />
        </ToolbarButton>
        <ToolbarButton onSelect={onSelect(1)} active={selectedIndex === 1}>
          <Text>File</Text>
        </ToolbarButton>
        <ToolbarButton onSelect={onSelect(2)} active={selectedIndex === 2}>
          <Text>Edit</Text>
        </ToolbarButton>
        <ToolbarButton onSelect={onSelect(3)} active={selectedIndex === 3}>
          <Text>View</Text>
        </ToolbarButton>
      </div>
    </div>
  );
};

export default Toolbar;
