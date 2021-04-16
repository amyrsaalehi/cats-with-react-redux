import styled from "styled-components";

// MIXINS
const btnMixin = `
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1rem 0.5rem;
  margin: 0.5rem 0;
  outline: none;
  background-color: #fff;
  color: #000;
`;
const WrapperMixin = `
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

// M D
const Header = styled.header`
  width: 100%;
  background-color: #fff;
  color: #000;
  text-align: center;
  padding: 2rem 0;
`;

// D
const DesktopWrapper = styled.div`
  ${WrapperMixin}
  max-width: 90%;
`;

// M
const MobileWrapper = styled.div`
  ${WrapperMixin}
`;

// D
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-left: 1px solid #ddd;
`;

// M D
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  padding: 2rem 1rem;
`;

//D
const DesktopButton = styled.button`
  ${btnMixin}
`;

// M
const MobileButton = styled.button`
  ${btnMixin}
  width: 100%;
`;

// M D
const PrimaryButton = styled.button`
  ${btnMixin}
  background-color: #5698d6;
  color: #fff;
`;

// M D
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
`;

// M
const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 1rem;
`;

// M
const MenuButton = styled.button`
  ${btnMixin}
  margin: 20;
`;

export {
    Header,
    Aside,
    ButtonContainer,
    Container,
    DesktopButton,
    DesktopWrapper,
    MenuButton,
    MenuButtonContainer,
    MobileButton,
    MobileWrapper,
    PrimaryButton,
}
