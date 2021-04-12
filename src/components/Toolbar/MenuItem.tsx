import React from "react";
import styled, { css } from "styled-components";

import { Mixins } from "../../style";
import { Text } from "../Text";

export interface MenuItemProps {
  text: string;
  keyboardShortcut: string;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = (
  props: MenuItemProps
): JSX.Element => {
  const { text, keyboardShortcut, disabled } = props;

  return (
    <Container disabled={disabled}>
      <Text size="small">{text}</Text>
      <Text size="small">{keyboardShortcut}</Text>
    </Container>
  );
};

type ContainerProps = {
  disabled?: boolean;
};

const ActiveStyle = css`
  &:hover {
    ${Mixins.ActiveBackground}
  }
`;

const DisabledStyle = css`
  opacity: 0.3;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;

  ${({ disabled }: ContainerProps): Css | false => !disabled && ActiveStyle}
  ${({ disabled }: ContainerProps): Css | false => !!disabled && DisabledStyle}
`;

export default MenuItem;
