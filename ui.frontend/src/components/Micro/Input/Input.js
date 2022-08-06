import React from "react";
import { Input, CheckboxContainer } from "./Input.styled";

const InputStyled = ({
  id,
  placeholder,
  type,
  value,
  onChange,
  checkboxColor,
  label,
  borderColor,
  placeholderColor,
}) => {
  const getInput = (type) => {
    switch (type) {
      case "text":
      case "email":
      case "number":
      case "url":
        return (
          <Input
            placeholderColor={placeholderColor}
            borderColor={borderColor}
            id={id}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
          />
        );
      case "checkbox":
        return (
          <CheckboxContainer checkboxColor={checkboxColor}>
            <Input id={id} type={type} value={value} onChange={onChange} />
          </CheckboxContainer>
        );
      default:
        return <Input>{label}</Input>;
    }
  };
  return <div>{getInput(type)}</div>;
};

export default InputStyled;