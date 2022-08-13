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
    >
      <img src={src} alt='icon' />
      {textButton}
      <img src={src1} alt='icon' />
    </ButtonStyled>
  );
};

export default Button;
