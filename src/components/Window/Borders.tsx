import React from "react";
import styled, { css } from "styled-components";

import { Color } from "../../style";
import { Text } from "../Text";

export const TopHeight = 30;
export const BorderWidth = 8;
export const LineWidth = 1;

type BorderProps = {
  focused: boolean;
};

const blur = (style: Css) => (props: BorderProps): Css | undefined => {
  if (!props.focused) {
    return style;
  }
};

const focus = (style: Css) => (props: BorderProps): Css | undefined => {
  if (props.focused) {
    return style;
  }
};

export const BorderBottom = styled.div<BorderProps>`
  grid-area: border-bottom;

  background-color: ${Color.LightSilver};
  border-top: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};
  margin-left -1px;
  margin-right -1px;

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      right: ${BorderWidth}px;
      left: ${BorderWidth}px;
      bottom: 1px;
      border-bottom: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      right: ${BorderWidth - 2}px;
      left: ${BorderWidth - 2}px;
      bottom: ${BorderWidth - 2}px;
      border-top: ${LineWidth}px solid ${Color.White};
    }
  `)}
`;

export const BorderLeft = styled.div<BorderProps>`
  grid-area: border-left;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-left: ${LineWidth}px solid ${Color.Black};
  margin-top: -1px;

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      top: ${TopHeight}px;
      left: 1px;
      bottom: ${BorderWidth}px;
      border-left: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      top: ${TopHeight - 1}px;
      left: ${BorderWidth - 2}px;
      bottom: ${BorderWidth - 1}px;
      border-right: ${LineWidth}px solid ${Color.White};
    }
  `)}
`;

export const BorderRight = styled.div<BorderProps>`
  grid-area: border-right;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-left: ${LineWidth}px solid ${Color.Black};
  margin-top: -1px;

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      top: ${TopHeight}px;
      right: 1px;
      bottom: ${BorderWidth}px;
      border-left: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      top: ${TopHeight - 1}px;
      right: ${BorderWidth - 2}px;
      bottom: ${BorderWidth - 1}px;
      border-right: ${LineWidth}px solid ${Color.White};
    }
  `)};
`;

export const BorderBottomLeft = styled.div<BorderProps>`
  grid-area: border-bottom-left;

  background-color: ${Color.LightSilver};
  border-left: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      left: 1px;
      bottom: 1px;
      width: ${BorderWidth}px;
      border-bottom: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      left: 1px;
      bottom: 1px;
      height: ${BorderWidth}px;
      border-left: ${LineWidth}px solid ${Color.RiverLady};
    }
  `)}
`;

export const BorderBottomRight = styled.div<BorderProps>`
  grid-area: border-bottom-right;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      right: 1px;
      bottom: 1px;
      width: ${BorderWidth}px;
      border-bottom: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      right: 1px;
      bottom: 1px;
      height: ${BorderWidth}px;
      border-left: ${LineWidth}px solid ${Color.RiverLady};
    }
  `)}
`;

export const BorderTopLeft = styled.div<BorderProps>`
  grid-area: border-top-left;

  background-color: ${Color.LightSilver};
  border-left: ${LineWidth}px solid ${Color.Black};
  border-top: ${LineWidth}px solid ${Color.Black};

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      left: 1px;
      top: 1px;
      width: ${BorderWidth}px;
      border-bottom: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      left: 1px;
      top: 1px;
      height: ${TopHeight}px;
      border-left: ${LineWidth}px solid ${Color.RiverLady};
    }
  `)}
`;

export const BorderTopRight = styled.div<BorderProps>`
  grid-area: border-top-right;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-top: ${LineWidth}px solid ${Color.Black};

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      right: 1px;
      top: 1px;
      width: ${BorderWidth}px;
      border-top: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      right: 1px;
      top: 1px;
      height: ${TopHeight}px;
      border-right: ${LineWidth}px solid ${Color.RiverLady};
    }
  `)}
`;

const HeaderContainer = styled.div<BorderProps>`
  grid-area: header;

  cursor: default;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 15px auto fit-content(100px) auto;
  grid-gap: 10px 5px;
  align-items: center;

  background-color: ${Color.LightSilver};
  border-top: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};
  margin-left -1px;
  margin-right -1px;

  padding-vertical: 5px;

  ${blur(css`
    background-color: ${Color.Alto};
  `)}

  ${focus(css`
    :before {
      content: " ";
      position: absolute;
      right: ${BorderWidth - 1}px;
      left: ${BorderWidth - 1}px;
      top: 1px;
      border-bottom: ${LineWidth}px solid ${Color.RiverLady};
    }

    :after {
      content: " ";
      position: absolute;
      right: ${BorderWidth - 2}px;
      left: ${BorderWidth - 2}px;
      top: ${TopHeight - 2}px;
      border-top: ${LineWidth}px solid ${Color.White};
    }
  `)}
`;

const Stripes = styled.div<BorderProps>`
  height: ${TopHeight - 12}px;
  background-image: linear-gradient(
    0deg,
    ${Color.DoveGray} 25%,
    ${Color.White} 25%,
    ${Color.White} 50%,
    ${Color.DoveGray} 50%,
    ${Color.DoveGray} 75%,
    ${Color.White} 75%,
    ${Color.White} 100%
  );
  background-size: 4px 4px;

  ${blur(css`
    visibility: hidden;
  `)}
`;

type HeaderProps = BorderProps & {
  text: string;
  onClose: () => void;
};

const Button = styled.button<BorderProps>`
  background-image: linear-gradient(
    135deg,
    ${Color.LightSilver},
    ${Color.RiverLady}
  );
  height: 15px;
  width: 15px;

  ${blur(css`
    visibility: hidden;
  `)}

  :focus {
    outline: none;
  }

  :active {
    background-image: linear-gradient(
      45deg,
      ${Color.LightSilver},
      ${Color.RiverLady}
    );
  }
`;

const TextProxy = styled(Text)`
  opacity: 1;

  ${blur(css`
    opacity: 0.5;
  `)}
`;

export const Header: React.FC<HeaderProps> = ({
  text,
  onClose,
  focused,
}: HeaderProps): JSX.Element => (
  <HeaderContainer focused={focused} className="window-drag-handle">
    <Button focused={focused} onClick={onClose} />
    <Stripes focused={focused} />
    <TextProxy focused={focused} size="small">
      {text}
    </TextProxy>
    <Stripes focused={focused} />
  </HeaderContainer>
);
