import React from "react";
import { Input, CheckboxContainer } from "./Input.styled";

const InputStyled = ({
  id,
  placeholder,
  type,
  value,
  onChange,
  onInput,
  checkboxColor,
  label,
  borderColor,
  register
}) => {
  const getInput = (type) => {
    switch (type) {
      case "text":
      case "email":
      case "tel":
      case "url":
        return (
          <Input
            borderColor={borderColor}
            id={id}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onInput={onInput}
            {...register(id)}
          />
        );
      case "checkbox":
        return (
          <CheckboxContainer checkboxColor={checkboxColor}>
            <Input
              id={id}
              type={type}
              value={value}
              onChange={onChange}
              {...register(id)}
            />
          </CheckboxContainer>
        );
      default:
        return <Input>{label}</Input>;
    }
  };
  return <div>{getInput(type)}</div>;
};

export default InputStyled;
