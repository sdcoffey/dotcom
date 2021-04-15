import styled from "styled-components";

import { Color } from "../../style";

export const TopHeight = 30;
export const BorderWidth = 10;
export const LineWidth = 1;

export const BorderBottom = styled.div`
  grid-area: border-bottom;

  background-color: ${Color.LightSilver};
  border-top: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};
  margin-left -1px;
  margin-right -1px;

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
`;

export const BorderLeft = styled.div`
  grid-area: border-left;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-left: ${LineWidth}px solid ${Color.Black};
  margin-top: -1px;

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
`;

export const BorderRight = styled.div`
  grid-area: border-right;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-left: ${LineWidth}px solid ${Color.Black};
  margin-top: -1px;

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
`;

export const BorderBottomLeft = styled.div`
  grid-area: border-bottom-left;

  background-color: ${Color.LightSilver};
  border-left: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};

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
`;

export const BorderBottomRight = styled.div`
  grid-area: border-bottom-right;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};

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
`;

export const Header = styled.div`
  grid-area: header;

  background-color: ${Color.LightSilver};
  border-top: ${LineWidth}px solid ${Color.Black};
  border-bottom: ${LineWidth}px solid ${Color.Black};
  margin-left -1px;
  margin-right -1px;

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
`;

export const BorderTopLeft = styled.div`
  grid-area: border-top-left;

  background-color: ${Color.LightSilver};
  border-left: ${LineWidth}px solid ${Color.Black};
  border-top: ${LineWidth}px solid ${Color.Black};

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
`;

export const BorderTopRight = styled.div`
  grid-area: border-top-right;

  background-color: ${Color.LightSilver};
  border-right: ${LineWidth}px solid ${Color.Black};
  border-top: ${LineWidth}px solid ${Color.Black};

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
`;
