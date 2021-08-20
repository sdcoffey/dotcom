import React from "react";
import styled from "styled-components";

import { Color } from "../../style";
import { Text } from "../Text";

export interface IconProps {
  name: string;
  img: string;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <Container>
      <img src={props.img} />
      <TextWrapper>
        <Text size="small">{props.name}</Text>
      </TextWrapper>
    </Container>
  );
};

const TextWrapper = styled.div`
  background-color: ${Color.White};
  padding: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
`;

export default Icon;
