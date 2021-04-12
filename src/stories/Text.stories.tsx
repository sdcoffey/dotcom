import React from "react";
import { Story, Meta } from "@storybook/react";

import { Text, TextProps } from "../components";

const Template: Story<TextProps> = (props: TextProps): JSX.Element => {
  return <Text {...props} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: "test",
  size: "regular",
  weight: "regular",
};

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["small", "regular", "large"],
      },
    },
    weight: {
      control: {
        type: "radio",
        options: ["regular", "bold"],
      },
    },
  },
} as Meta;
