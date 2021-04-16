import React, { useState } from "react";
import ReactDrawer from "react-drawer";
import "react-drawer/lib/react-drawer.css";
import { useDispatch } from "react-redux";
import { fetchMoreImages } from "../redux/actions/imageActions";
import { makePascal } from "../utils/helpers/wording";
import MenuIcon from "../assets/images/menu-icon.svg"
import XIcon from "../assets/images/x-icon.svg"
import { MobileButton, MenuButtonContainer, MenuButton, Header, MobileWrapper, Container, ButtonContainer, PrimaryButton } from '../components/styled/LayoutStyled'


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
          <MobileButton
            key={id}
            style={categoryId === id ? ButtonActiveStyles : {}}
            onClick={() => handleChangeMenuItem(id)}
          >
            {makePascal(name)}
          </MobileButton>
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
      <MobileWrapper>
        <Container>{children}</Container>
      </MobileWrapper>
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
