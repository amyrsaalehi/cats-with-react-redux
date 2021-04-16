import styled from "styled-components";

// CARD
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

export { Wrapper };
