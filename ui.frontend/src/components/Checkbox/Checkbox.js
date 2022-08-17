import React from 'react';
import {InputBlock} from "../InputBlock/InputBlock";

const Checkbox = ({label, labelColor, errorText, colorError, borderColor, register, errors, id}) => {

  return (
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
  )
}

export default Checkbox;