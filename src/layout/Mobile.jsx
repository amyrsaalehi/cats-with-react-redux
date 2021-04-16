import React, { useState } from "react";
import styled from "styled-components";
import ReactDrawer from "react-drawer";
import "react-drawer/lib/react-drawer.css";
import { useDispatch } from "react-redux";
import { fetchMoreImages } from "../redux/actions/imageActions";
import { makePascal } from "../utils/helpers/wording";
import MenuIcon from "../assets/images/menu-icon.svg"
import XIcon from "../assets/images/x-icon.svg"

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
  margin: auto;
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
  width: 100%;
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

const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 1rem;
`;

const MenuButton = styled.button`
  ${btnMixin}
  margin: 20;
`;

const Mobile = ({ children, categories, categoryId, setCategoryId, page }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const iconSize = 20;

  const ButtonActiveStyles = {
    backgroundColor: "#5698d6",
    color: "#fff",
  };

  const handleLoadMore = () => {
    dispatch(fetchMoreImages(categoryId, page + 1));
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const handleChangeMenuItem = (id) => {
    setCategoryId(id);
    setOpenDrawer(false);
  };

  return (
    <>
      <ReactDrawer
        open={openDrawer}
        position="left"
        onClose={closeDrawer}
        noOverlay={false}
      >
        <i onClick={closeDrawer} className="icono-cross"></i>
        {categories.map(({ name, id }) => (
          <Button
            key={id}
            style={categoryId === id ? ButtonActiveStyles : {}}
            onClick={() => handleChangeMenuItem(id)}
          >
            {makePascal(name)}
          </Button>
        ))}
      </ReactDrawer>
      <MenuButtonContainer>
        <MenuButton onClick={toggleDrawer} disabled={openDrawer}>
          {openDrawer ? (
            <img
              width={iconSize}
              src={XIcon}
              alt="X Icon"
            />
          ) : (
            <img
              width={iconSize}
              src={MenuIcon}
              alt="Menu Icon"
            />
          )}
        </MenuButton>
      </MenuButtonContainer>
      <Header>
        <h1>Cat Images</h1>
      </Header>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
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

export default Mobile;
