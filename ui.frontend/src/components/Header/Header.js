import React from "react";
import Title from "../Micro/Title/Title";
import HeaderContainer from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Title type="h1" />
      <Title type="h3" />
    </HeaderContainer>
  );
};

Header.defaultProps = {
  title: "Digite um título",
};

export default Header;
