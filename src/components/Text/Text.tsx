import React from "react";
import classnames from "classnames";

import "./Text.scss";

type Size = "regular" | "large" | "small";

type Weight = "regular" | "bold";

export interface TextProps {
  size?: Size;
  weight?: Weight;
  children: string;
}

const Text: React.FC<TextProps> = ({
  children,
  weight = "regular",
  size = "regular",
}: TextProps) => {
  const className = classnames("Text", weight, size);

  console.log({ className });

  return <p className={className}>{children}</p>;
};

export default Text;
