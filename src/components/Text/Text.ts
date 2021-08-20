import styled from "styled-components";

type Size = "regular" | "large" | "small";

type Weight = "regular" | "bold";

export interface TextProps {
  size?: Size;
  weight?: Weight;
  children: string;
}

const Text = styled.p<TextProps>`
  margin: 0;
  font-size: 1em;
  line-height: 1em;
  display: inline-block;

  font-family: ${(props: TextProps): string => weight(props.weight)};
  font-size: ${(props: TextProps): number => size(props.size)}em;
  line-height: ${(props: TextProps): number => size(props.size)}em;
`;

const weight = (weight: Weight = "regular"): string => {
  return weight === "regular" ? "Espy Regular" : "Espy Bold";
};

const size = (size: Size = "regular"): number => {
  switch (size) {
    case "regular":
      return 1;
    case "large":
      return 1.25;
    case "small":
      return 0.8;
  }
};

export default Text;
