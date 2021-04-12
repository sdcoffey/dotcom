import React from "react";
import styled from "styled-components";

import { Mixins } from "../../style";

interface ToolbarButtonProps {
  children: React.ReactNode;
  onSelect: (event: React.MouseEvent) => void;
  active: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = (
  props: ToolbarButtonProps
): JSX.Element => {
  const { children, onSelect, active = false } = props;

  const onMouseDown = (event: React.MouseEvent): void => {
    onSelect(event);
  };

  return (
    <Button active={active} onMouseDown={onMouseDown}>
      {children}
    </Button>
  );
};

type StyleProps = {
  active: boolean;
};

const Button = styled.button<StyleProps>`
  padding: 8px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  &:active {
    ${Mixins.ActiveBackground}
  }

  &:focus {
    outline: 0;
  }

  ${({ active }: StyleProps): Css | false => active && Mixins.ActiveBackground}
`;

export default ToolbarButton;
