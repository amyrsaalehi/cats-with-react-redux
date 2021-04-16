import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import { Wrapper } from "../styled/ComponentStyled";

const size = isMobile ? "100%" : isTablet ? "500px" : "200px";

function Card({ imageUrl }) {
  return (
    <Wrapper
      style={{
        background: `url(${imageUrl}) center center no-repeat`,
        backgroundSize: "cover",
      }}
    ></Wrapper>
  );
}

export default Card;
