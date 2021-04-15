import React from "react";

import { Text, Window } from "../components";

export default { title: "Components/Window", component: Window };

export const Basic = (): JSX.Element => {
  return (
    <Window>
      <Text>Test</Text>
    </Window>
  );
};
