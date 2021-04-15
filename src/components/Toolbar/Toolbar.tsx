import React from "react";
import styled from "styled-components";

import buttonLeft from "../../assets/button_left.png";
import buttonRight from "../../assets/button_right.png";
import buttonMiddle from "../../assets/button_middle.png";
import Menu from "./Menu";
import macLogo from "../../assets/mac-logo.png";
import ToolbarButton from "./ToolbarButton";

import { Text } from "../Text";
import { Time } from "../../utils";

const Toolbar: React.FC<Record<string, never>> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>();
  const [time, setTime] = React.useState(Time.getTime);

  const timerRef = React.useRef<ReturnType<typeof setInterval>>();

  React.useEffect(() => {
    timerRef.current = setInterval(() => setTime(Time.getTime()), 1000);

    return (): void => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, []);

  const toolbarButtonGroup = document.querySelector(".toolbargroup");

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
    <Container>
      <ToolbarGroup className="toolbargroup">
        <div>
          <ToolbarButton onSelect={onSelect(0)} active={selectedIndex === 0}>
            <MacLogo height={15} src={macLogo} />
          </ToolbarButton>
          <MenuWrapper active={selectedIndex === 0}>
            <Menu
              menuItems={[
                [{ text: "About this Website", keyboardShortcut: "" }],
              ]}
            />
          </MenuWrapper>
        </div>
        <div>
          <ToolbarButton onSelect={onSelect(1)} active={selectedIndex === 1}>
            <Text>File</Text>
          </ToolbarButton>
          <MenuWrapper active={selectedIndex === 1}>
            <Menu
              menuItems={[
                [{ text: "About this Website", keyboardShortcut: "" }],
              ]}
            />
          </MenuWrapper>
        </div>
        <div>
          <ToolbarButton onSelect={onSelect(2)} active={selectedIndex === 2}>
            <Text>Edit</Text>
          </ToolbarButton>
          <MenuWrapper active={selectedIndex === 2}>
            <Menu
              menuItems={[
                [{ text: "About this Website", keyboardShortcut: "" }],
              ]}
            />
          </MenuWrapper>
        </div>
        <ToolbarButton onSelect={onSelect(3)} active={selectedIndex === 3}>
          <Text>View</Text>
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup>
        <Text size="small">{time}</Text>
      </ToolbarGroup>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${buttonLeft}), url(${buttonRight}),
    url(${buttonMiddle});
  background-position: left, right, center;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-size: contain;
  border: none;
  outline: none;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ToolbarGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const MacLogo = styled.img`
  transform: translateY(-1px);
`;

type MenuWrapperProps = {
  active: boolean;
};

const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  display: ${(props): string => (props.active ? "block" : "none")};
  z-index: 1;
`;

export default Toolbar;
