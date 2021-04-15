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
}

type Size = {
  height: string;
  width: string;
};

type Position = {
  x: number;
  y: number;
};

const Window: React.FC<WindowProps> = (props: WindowProps) => {
  const { children } = props;
  const [size, setSize] = React.useState<Size>({
    height: "100px",
    width: "160px",
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

  return (
    <Rnd
      onDragStop={onDragStop}
      position={position}
      size={size}
      onResizeStop={onResizeStop}
    >
      <Container>
        <BorderTopLeft />
        <Header />
        <BorderTopRight />
        <BorderLeft />
        <Children>{children}</Children>

        <BorderRight />
        <BorderBottomLeft />
        <BorderBottom />
        <BorderBottomRight />
      </Container>
    </Rnd>
  );
};

const Container = styled.div`
  display: grid;
  height: 100%;
  box-shadow: 1px 1px 0px 0px ${Color.Black};

  grid-template-rows: ${TopHeight}px auto ${BorderWidth}px;
  grid-template-columns: ${BorderWidth}px auto ${BorderWidth}px;

  grid-template-areas:
    "border-top-left    header        border-top-right"
    "border-left        children      border-right"
    "border-bottom-left border-bottom border-bottom-right";
`;

const Children = styled.div`
  grid-area: children;
`;

export default Window;
