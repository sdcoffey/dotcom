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
      <Image src={props.img} />
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
  align-items: center;
  width: fit-content;
`;

const Image = styled.img`
  height: 52px;
  width: 52px;
`;

export default Icon;
