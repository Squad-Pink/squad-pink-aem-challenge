import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({
  textButton,
  colorButton,
  colorTextButton,
  id,
  src,
  src1,
  onClick,
  onBlur,
  onMouseDown,
<<<<<<< HEAD
  type,
=======
  type
>>>>>>> 3f41bc9bc2b305a56f414149caa14b9c0193792c
}) => {
  return (
    <ButtonStyled
      id={id}
      colorButton={colorButton}
      className={`${id}`}
      onClick={onClick}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      colorTextButton={colorTextButton}
      type={type}
    >
      <img src={src} alt='icon' />
      {textButton}
      <img src={src1} alt='icon' />
    </ButtonStyled>
  );
};

export default Button;
