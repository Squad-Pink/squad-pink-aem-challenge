import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Title from "../Micro/Title/Title";
import HeaderContainer from "./Header.styled";
import Line from "../Micro/Line/Line";
import { useLocation } from "react-router-dom";



const Header = ({ title, titleColor, bigTitle }) => {

  let tab = "test";
  const location = useLocation();

  if(location.pathname === "/content/reactapp/us/en/home") {
    tab = 1
  }
  if(location.pathname === "/content/reactapp/us/en/home/social") {
    tab = 2
  }
  if(location.pathname === "/content/reactapp/us/en/home/certificates") {
    tab = 3    
  }
  if(location.pathname === "/content/reactapp/us/en/home/sucess") {
    tab = 4    
  }

  switch(tab){
    case 1:
      bigTitle="First Tab"
      break;
    case 2:
      bigTitle="Second Tab"
      break;
    case 3:
      bigTitle="Third Tab"
      break;
    case 4:
      bigTitle="Success Tab"
      break;
      default:
        bigTitle="First Tab"
  }
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
