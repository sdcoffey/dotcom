import React from "react";
import styled from "styled-components";

export interface IconProps {}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return <Container className="Icon"></Container>;
};

const Container = styled.div``;

export default Icon;
