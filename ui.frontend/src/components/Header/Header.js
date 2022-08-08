import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Title from "../Micro/Title/Title";
import HeaderContainer from "./Header.styled";
import Line from "../Micro/Line/Line";

const Header = ({ title, titleColor, bigTitle }) => {
  return (
    <>
      <HeaderContainer>
        <Title type='h1' title={title} />
        <Title type='h3' titleColor={titleColor} title={bigTitle} />
      </HeaderContainer>
      <Line />
    </>
  );
};

Header.defaultProps = {
  title: "Digite um título",
  bigTitle: "Digite um título",
};

export default MapTo("reactapp/components/header")(Header);
