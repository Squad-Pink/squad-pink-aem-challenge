import React from 'react';
import {InputBlock} from "../InputBlock/InputBlock";
import { DivCheckbox } from "./Checkbox.styled"

const Checkbox = ({label, labelColor, errorText, colorError, borderColor, register, errors, id}) => {

  return (
    <DivCheckbox>
      <InputBlock
        register={register}
        errors={errors}
        type="checkbox"
        label={label}
        labelColor={labelColor}
        errorText={errorText}
        colorError={colorError}
        borderColor={borderColor}
        id={id}
    />
  </DivCheckbox>
  )
}

export default Checkbox;