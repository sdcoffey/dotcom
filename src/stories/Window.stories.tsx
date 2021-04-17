import React from "react";

import { Story } from "@storybook/react";

import { Text, Window, WindowProps } from "../components";

const Template: Story<WindowProps> = (props: WindowProps): JSX.Element => {
  return <Window {...props} />;
};

export const Focused = Template.bind({});
Focused.args = {
  children: <Text>Test</Text>,
  name: "Window",
  focused: true,
  onFocus: () => {},
  onBlur: () => {},
  onClose: () => {},
};

export const Blurred = Template.bind({});
Blurred.args = {
  children: <Text>Test</Text>,
  name: "Window",
  focused: false,
  onFocus: () => {},
  onBlur: () => {},
  onClose: () => {},
};

export default {
  title: "Components/Window",
  component: Window,
  argTypes: {
    children: {
      control: false,
    },
    focused: { control: false },
  },
};
