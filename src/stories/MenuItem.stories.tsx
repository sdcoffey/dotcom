import React from "react";

import { Story } from "@storybook/react";

import { MenuItem, MenuItemProps } from "../components";

const Template: Story<MenuItemProps> = (props: MenuItemProps): JSX.Element => {
  return <MenuItem {...props} />;
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Edit",
  keyboardShortcut: "N",
};

export default { title: "Toolbar/Item", component: MenuItem };
