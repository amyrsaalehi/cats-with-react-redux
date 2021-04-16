import React from "react";
import styled from "styled-components";
import { isMobile, isTablet } from "react-device-detect";

const size = isMobile ? "100%" : isTablet ? "500px" : "200px";

const Wrapper = styled.div`
  width: ${size};
  height: 200px;
  margin: 1rem 0.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 10px 1px #757575;
  transition: 500ms;

  &:hover {
    cusor: pointer;
    transform: scale(1.1);
  }
`;

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
