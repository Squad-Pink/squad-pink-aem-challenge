import React from "react";
import Label from "../Micro/Label/MicroLabel";
import ErrorMessage from "../Micro/ErrorMessage/ErrorMessage";
import Input from "../Micro/Input/Input";
import { InputDiv, LabelDiv } from "./InputBlock.styled";

export const InputBlock = ({
  register,
  errors,
  label,
  labelColor,
  errorText,
  colorError,
  type,
  placeholderColor,
  id,
  borderColor,
  placeholder,
  value,
  onChange,
}) => {
  switch (type) {
    case "text":
      type = "text";
      break;
    case "url":
      type = "url";
      break;
    case "tel":
      type = "tel";
      break;
    case "email":
      type = "email";
      break;
    case "checkbox":
      type = "checkbox";
      break;
    default:
      type = "aaa";
  }

  return (
    <InputDiv className={`${type}`}>
      <LabelDiv>
        <Label label={label} labelColor={labelColor} id={id} />
        <ErrorMessage
          type={type}
          errorText={errorText}
          colorError={colorError}
          errors={errors}
        />
      </LabelDiv>
      <Input
        borderColor={borderColor}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        register={register}
      />
    </InputDiv>
  );
};
