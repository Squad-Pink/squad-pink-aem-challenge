import React from 'react'
import { ButtonStyled } from './Button.styled';

const Button = ({textButton, colorButton, firstIcon, secondIcon,icons }) => {
  switch (firstIcon) {
    case "plus":
      firstIcon = <i className="fa-solid fa-plus"></i>
    break;
    case "check":
      firstIcon = <i className="fa-solid fa-check"></i>
    break;  
    default:
      firstIcon="";
  };

  return (
    <ButtonStyled className={icons} colorButton={colorButton}> {firstIcon} {textButton} {secondIcon ? <i className="fa-solid fa-angle-right"></i> : ""} </ButtonStyled>
  );
}

export default Button;