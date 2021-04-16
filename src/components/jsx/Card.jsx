import React from "react";

import { Wrapper } from "../styled/ComponentStyled";

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
