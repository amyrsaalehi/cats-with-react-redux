import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchMoreImages } from "../redux/actions/imageActions";
import { makePascal } from "../utils/helpers/wording";

const btnMixin = `
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1rem 0.5rem;
  margin: 0.5rem 0;
  outline: none;
`;

const Header = styled.header`
  width: 100%;
  background-color: #fff;
  color: #000;
  text-align: center;
  padding: 2rem 0;
`;

// const H1 = styled.h1``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-left: 1px solid #ddd;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  padding: 2rem 1rem;
`;

const Button = styled.button`
  ${btnMixin}
  background-color: #fff;
  color: #000;
`;

const PrimaryButton = styled.button`
  ${btnMixin}
  background-color: #5698d6;
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
`;

const Desktop = ({ children, categories, categoryId, setCategoryId, page }) => {
  const dispatch = useDispatch();

  const ButtonActiveStyles = {
    backgroundColor: "#5698d6",
    color: "#fff",
  };

  const handleLoadMore = () => {
    dispatch(fetchMoreImages(categoryId, page+1));
  };

  return (
    <>
      <Header>
        <h1>Cat Images</h1>
      </Header>
      <Wrapper>
        <Container>{children}</Container>
        <Aside>
          {categories.map(({ name, id }) => (
            <Button
              key={id}
              style={categoryId === id ? ButtonActiveStyles : {}}
              onClick={() => setCategoryId(id)}
            >
              {makePascal(name)}
            </Button>
          ))}
        </Aside>
      </Wrapper>
      <ButtonContainer style={{
        visibility: categoryId ? 'visible' : 'hidden'
      }}>
        <PrimaryButton onClick={handleLoadMore}>Load More</PrimaryButton>
      </ButtonContainer>
    </>
  );
};

export default Desktop;
