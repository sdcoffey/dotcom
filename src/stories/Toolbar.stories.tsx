import React from "react";

import { Toolbar } from "../components";

export default { title: "Toolbar/Toolbar", component: Toolbar };

const handleClick = (): void => {
  console.log("click!");
};

const config = [
  {
    name: "File",
    items: [
      [
        { text: "New Folder...", keyboardShortcut: "N", onClick: handleClick },
        {
          text: "New File...",
          keyboardShortcut: "NF",
          disabled: true,
          onClick: handleClick,
        },
      ],
    ],
  },
];

export const Basic = (): JSX.Element => {
  return <Toolbar config={config} />;
};
