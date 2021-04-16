import React from "react";
import { useDispatch } from "react-redux";
import { fetchMoreImages } from "../redux/actions/imageActions";
import { makePascal } from "../utils/helpers/wording";
import {
  Header,
  DesktopWrapper,
  Container,
  Aside,
  DesktopButton,
  ButtonContainer,
  PrimaryButton,
} from "../components/styled/LayoutStyled";

const Desktop = ({ children, categories, categoryId, setCategoryId, page }) => {
  const dispatch = useDispatch();

  const ButtonActiveStyles = {
    backgroundColor: "#5698d6",
    color: "#fff",
  };

  const handleLoadMore = () => {
    dispatch(fetchMoreImages(categoryId, page + 1));
  };

  return (
    <>
      <Header>
        <h1>Cat Images</h1>
      </Header>
      <DesktopWrapper>
        <Container>{children}</Container>
        <Aside>
          {categories.map(({ name, id }) => (
            <DesktopButton
              key={id}
              style={categoryId === id ? ButtonActiveStyles : {}}
              onClick={() => setCategoryId(id)}
            >
              {makePascal(name)}
            </DesktopButton>
          ))}
        </Aside>
      </DesktopWrapper>
      <ButtonContainer
        style={{
          visibility: categoryId ? "visible" : "hidden",
        }}
      >
        <PrimaryButton onClick={handleLoadMore}>Load More</PrimaryButton>
      </ButtonContainer>
    </>
  );
};

export default Desktop;
