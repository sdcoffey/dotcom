import React from "react";

import { FontFace } from "../src/style";

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <FontFace />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
