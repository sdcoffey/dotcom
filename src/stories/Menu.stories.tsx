import React from "react";

import { Story } from "@storybook/react";

import { Menu, MenuProps, MenuItemProps } from "../components";

const handleClick = (): void => {
  console.log("click!");
};

const items: MenuItemProps[][] = [
  [
    { text: "New Folder...", keyboardShortcut: "N", onClick: handleClick },
    {
      text: "New File...",
      keyboardShortcut: "NF",
      disabled: true,
      onClick: handleClick,
    },
  ],
  [
    { text: "New Folder...", keyboardShortcut: "N", onClick: handleClick },
    {
      text: "New File...",
      keyboardShortcut: "NF",
      disabled: true,
      onClick: handleClick,
    },
  ],
];

const Template: Story<MenuProps> = (props: MenuProps): JSX.Element => {
  return <Menu {...props} />;
};

export const Primary = Template.bind({});
Primary.args = {
  menuItems: items,
};

export default { title: "Toolbar/Menu", component: Menu };
