import React from 'react'
import { ButtonStyled } from './Button.styled';

const Button = ({textButton, colorButton, type, firstIcon, secondIcon }) => {
  switch (type) {
    case "next":
      firstIcon = "";
      secondIcon = <i className="fa-solid fa-angle-right"></i>;
    break;
    case "more":
      firstIcon = <i className="fa-solid fa-plus"></i>;
      secondIcon = <i className="fa-solid fa-angle-right"></i>;
    break;  
    case "certificates":
      firstIcon = "";
      secondIcon = <i className="fa-solid fa-angle-down"></i>;
    break;  
    case "finish":
      firstIcon = <i className="fa-solid fa-check"></i>;
      secondIcon = "";
    break;  
    
    default:
      firstIcon="";
      secondIcon = "";
  };

  return (
    <ButtonStyled className={type} colorButton={colorButton}> {firstIcon} {textButton} {secondIcon} </ButtonStyled>
  );
}

export default Button;