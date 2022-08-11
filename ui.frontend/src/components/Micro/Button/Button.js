import React from 'react'
import { ButtonStyled } from './Button.styled';

const Button = ({textButton, colorButton, id, firstIcon, secondIcon }) => { 
  return (
    <ButtonStyled className={id} colorButton={colorButton}>
      <img firstIcon={firstIcon} alt="icon" />
       {textButton}  
      <img secondIcon={secondIcon} alt="icon" />
    </ButtonStyled>
  );
}

export default Button;