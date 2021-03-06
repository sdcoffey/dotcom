import React from "react";
import styled from "styled-components";

import { Rnd, RndDragCallback, RndResizeCallback } from "react-rnd";

import { Color } from "../../style";
import {
  BorderLeft,
  BorderRight,
  BorderBottomLeft,
  BorderBottomRight,
  BorderBottom,
  BorderTopLeft,
  BorderTopRight,
  Header,
  BorderWidth,
  TopHeight,
} from "./Borders";

export interface WindowProps {
  children: React.ReactNode;
  name: string;
  windowId: string;
  focused: boolean;
  onFocus: () => void;
  onClose: () => void;
}

type Size = {
  height: string;
  width: string;
};

type Position = {
  x: number;
  y: number;
};

const Window = (
  props: WindowProps,
  ref: React.Ref<HTMLDivElement>
): JSX.Element => {
  const { children, name, windowId, focused, onFocus, onClose } = props;
  const [size, setSize] = React.useState<Size>({
    height: "200px",
    width: "300px",
  });
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 });

  const onResizeStop: RndResizeCallback = (
    e,
    direction,
    ref,
    delta,
    position
  ): void => {
    const { width, height } = ref.style;
    setSize({ width, height });
    setPosition(position);
  };

  const onDragStop: RndDragCallback = (event, pos): void => {
    setPosition(pos);
  };

  const onResizeStart = (): void => {
    onFocus();
  };

  return (
    <Rnd
      onDragStop={onDragStop}
      position={position}
      size={size}
      onResizeStop={onResizeStop}
      dragHandleClassName="window-drag-handle"
      onResizeStart={onResizeStart}
      minHeight={"100px"}
      minWidth={"160px"}
      bounds=".window-area"
      enableResizing={{
        bottomLeft: true,
        bottomRight: true,
        topLeft: true,
        topRight: true,
      }}
    >
      <Container focused={focused} className={windowId} ref={ref}>
        <BorderTopLeft focused={focused} />
        <Header
          focused={focused}
          onClose={(): void => {
            onClose();
          }}
          text={name}
        />
        <BorderTopRight focused={focused} />
        <BorderLeft focused={focused} />
        <Children>{children}</Children>

        <BorderRight focused={focused} />
        <BorderBottomLeft focused={focused} />
        <BorderBottom focused={focused} />
        <BorderBottomRight focused={focused} />
      </Container>
    </Rnd>
  );
};

const Container = styled.div<{ focused: boolean }>`
  display: grid;
  height: 100%;

  ${(props): string | false =>
    props.focused && `box-shadow: 2px 2px 0px 0px ${Color.Black};`}

  grid-template-rows: ${TopHeight}px auto ${BorderWidth}px;
  grid-template-columns: ${BorderWidth}px auto ${BorderWidth}px;

  grid-template-areas:
    "border-top-left    header        border-top-right"
    "border-left        children      border-right"
    "border-bottom-left border-bottom border-bottom-right";
`;

const Children = styled.div`
  grid-area: children;
  background-color: ${Color.White};
`;

export default React.forwardRef<HTMLDivElement, WindowProps>(Window);
