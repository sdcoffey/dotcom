import React from "react";
import styled from "styled-components";

import Menu from "./Menu";
import macLogo from "../../assets/mac-logo.png";
import ToolbarButton from "./ToolbarButton";

import { Color } from "../../style";
import { MenuItemProps } from "./MenuItem";
import { Text } from "../Text";
import { Time } from "../../utils";

interface ToolBarProps {
  config: ToolbarConfig;
}

const Toolbar = ({ config }: ToolBarProps): JSX.Element => {
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

  const MenuProxy = React.memo(
    (props: {
      index: number;
      name?: string;
      component?: React.ReactNode;
      menu: MenuItemProps[][];
    }): JSX.Element => {
      const { component, index, name, menu } = props;
      console.log("render", index);
      return (
        <div>
          <ToolbarButton
            onSelect={onSelect(index)}
            active={selectedIndex === index}
          >
            {name && <Text size="small">{name}</Text>}
            {component && component}
          </ToolbarButton>
          <MenuWrapper active={selectedIndex === index}>
            <Menu menuItems={menu} />
          </MenuWrapper>
        </div>
      );
    }
  );

  const macMenu = [
    [
      {
        text: "About this Website",
        keyboardShortcut: "",
        onClick: (): void => console.log("About"),
      },
    ],
  ];

  return (
    <Container className="toolbar-area">
      <ToolbarGroup className="toolbargroup">
        <MenuProxy
          key="mac-logo"
          index={0}
          component={<MacLogo height={15} src={macLogo} />}
          menu={macMenu}
        />
        {config.map((config, index) => (
          <MenuProxy
            key={index + 1}
            index={index + 1}
            name={config.name}
            component={config.component}
            menu={config.items}
          />
        ))}
      </ToolbarGroup>
      <ToolbarGroup>
        <Text size="small">{time}</Text>
      </ToolbarGroup>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${Color.LightSilver};
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid black;

  :after {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 1px;
    background-color: ${Color.White};
  }
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
  z-index: 2;
`;

export default React.memo(Toolbar);
