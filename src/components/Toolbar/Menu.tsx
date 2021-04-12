import React from "react";
import styled from "styled-components";

import { default as MenuItem, MenuItemProps } from "./MenuItem";

import { Color } from "../../style";

export interface MenuProps {
  menuItems: MenuItemProps[][];
}

const Menu: React.FC<MenuProps> = (props: MenuProps): JSX.Element => {
  const { menuItems } = props;

  const Section = ({ items }: { items: MenuItemProps[] }): JSX.Element => (
    <SectionStyle>
      {items.map((item, i) => (
        <MenuItem key={`item-${i}`} {...item} />
      ))}
    </SectionStyle>
  );

  return (
    <Container>
      {menuItems.map((items, i) => (
        <Section key={`section-${i}`} items={items} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${Color.Gray};
  outline: solid 1px black;
`;

const SectionStyle = styled.div`
  border-bottom: solid 1px black;
`;

export default Menu;
