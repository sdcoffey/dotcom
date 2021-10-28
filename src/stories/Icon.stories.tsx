import React from "react";

import { Icon } from "../components";
import TextIcon from "../assets/text-icon.png";

export default { title: "Components/Icon", component: Icon };

export const Basic = (): JSX.Element => {
  return (
    <div>
      <Icon img={TextIcon} name="Tst" />
    </div>
  );
};
