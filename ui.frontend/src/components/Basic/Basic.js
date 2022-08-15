import React from "react";
import { InputBlock } from "../InputBlock/InputBlock";
import { Birthday } from "../Birthday/Birthday"
import Button from "../Micro/Button/Button";
import { FormBasic, InputFormGroup } from "./Basic.styled";
import { MapTo } from "@adobe/aem-react-editable-components";
import { useForm } from "react-hook-form";

const Basic = ({ 
        basicContainer,
        submitBtnTitle,
        submitBtnColor,
        submitColorText,
        submitFirstIcon = {},
        submitSecondIcon = {}, 
    }) => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const TYPES = {
        type1: "text",
        type2: "url",
        type3: "tel",
        type4: "email",
        type5: "checkbox",
      };

  return (
    <FormBasic>
         {basicContainer.map(
          (
            {
              inputType,
              inputLabelText,
              inputLabelColor,
              inputErrorText,
              inputColorError,
              inputPlaceholderText,
              inputBorderColor,
            },
            index
          ) => (
            <InputFormGroup key={index}>
              <InputBlock
                register={register}
                errors={errors}
                type={TYPES[inputType]}
                label={inputLabelText}
                labelColor={inputLabelColor}
                errorText={inputErrorText}
                colorError={inputColorError}
                placeholder={inputPlaceholderText}
                borderColor={inputBorderColor}
                id={inputLabelText}
              />
            </InputFormGroup>
          )
        )}


        <Birthday/>

     

        <Button
            type='submit'
            textButton={submitBtnTitle}
            colorButton={submitBtnColor}
            colorTextButton={submitColorText}
            src={submitFirstIcon.src}
            src1={submitSecondIcon.src}
            id='Submit'
        />

    </FormBasic>
  )
}


export default MapTo("reactapp/components/basic-container")(Basic);