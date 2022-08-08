import React from "react";
import { FormsTitle, TabTitle, SignUpTitle, TitleStyled } from "./Title.styled";

const Title = ({ type, title, titleColor }) => {
  switch (type) {
    case "h1":
      return <FormsTitle>{title}</FormsTitle>;
    case "h2":
      return <SignUpTitle>{title}</SignUpTitle>;
    case "h3":
      return <TabTitle titleColor={titleColor}>{title}</TabTitle>;
    default:
      return <TitleStyled>{title}</TitleStyled>;
  }
};

export default Title;
