import React from "react";
import { InputBlock } from "../InputBlock/InputBlock";
import  Birthday  from "../Birthday/Birthday"
import Button from "../Micro/Button/Button";
import Checkbox from "../Checkbox/Checkbox"
import { FormBasic, InputFormGroup } from "./Basic.styled";
import { MapTo } from "@adobe/aem-react-editable-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  'Full Name *': yup.string().min(4).required(),
  'Email *': yup.string().email().required(),
  'I accept the terms and privacy': yup.boolean().isTrue().required(),
}).required()

const Basic = ({ 
        formBasic,
        birthdayLabelTitle,
        birthdayLabelDay,
        birthdayLabelMonth,
        birthdayLabelYear,
        birthdayLabelColor,
        birthdayBorderColor,
        checkboxLabelText,
        checkboxLabelColor,
        checkboxErrorText,
        checkboxColorError,
        checkboxBorderColor,
        submitBtnTitle,
        submitBtnColor,
        submitColorText,
        submitFirstIcon = {},
        submitSecondIcon = {}, 
    }) => {

    const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema) });

    const onSubmit = data => saveLocal(data)

    const saveLocal = (value) => {
      let localValues = Object.entries(value)
      for(let i = 0; i < localValues.length; i++) {
        localStorage.setItem(localValues[i][0],localValues[i][1])
      }
    };

    const TYPES = {
        type1: "text",
        type2: "url",
        type3: "tel",
        type4: "email",
        type5: "checkbox",
      };

  return (
    <FormBasic onSubmit={handleSubmit(onSubmit)}>
         {formBasic.map(
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

        <Birthday 
        labelTitle={birthdayLabelTitle}
        labelDay={birthdayLabelDay}
        labelMonth={birthdayLabelMonth}
        labelYear={birthdayLabelYear}
        labelColor={birthdayLabelColor}
        borderColor={birthdayBorderColor}
        />

        <Checkbox
          register={register}
          errors={errors}
          label={checkboxLabelText}
          labelColor={checkboxLabelColor}
          errorText={checkboxErrorText}
          colorError={checkboxColorError}
          borderColor={checkboxBorderColor}
        />

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
  );
};

Basic.defaultProps = {
  formBasic: [
    {
      inputType: "Escolha o tipo de input",
      inputLabelText: "Digite o texto da label",
      inputLabelColor: "Escolha a cor da label",
      inputErrorText: "Digite o texto da mensagem de erro",
      inputColorError: "Escolha a cor da mensagem de erro",
      inputPlaceholderText: "Digite o texto do placeholder",
      inputBorderColor: "Escolha a cor da borda do input",
    },
  ],
  birthdayLabelTitle:"Digite o título da label",
  birthdayLabelDay:"Digite o texto da label do primeiro select",
  birthdayLabelMonth:"Digite o texto da label do segundo select",
  birthdayLabelYear:"Digite o texto da label do terceiro select",
  birthdayLabelColor:"Escolha a cor da label do select",
  birthdayBorderColor:"Escolha a cor da borda do select",
  checkboxLabelText:"Digite o texto da label do checkbox",
  checkboxLabelColor:"Escolha a cor da label do checkbox",
  checkboxErrorText:"Digite o texto da mensagem de erro do checkbox",
  checkboxColorError:"Escolha a cor da mensagem de erro do checkbox",
  checkboxBorderColor:"Escolha a cor da borda do checkbox",
  submitBtnTitle: "Digite o texto do botão",
  submitBtnColor: "Escolha a cor do botão",
  submitColorText: "Escolha a cor do texto ",
  submitFirstIcon:"https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
  submitSecondIcon:"https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
};

Basic.propTypes = {
  formBasic: [
    {
      inputType: PropTypes.string,
    }
  ]
};

export default MapTo("reactapp/components/form-basic")(Basic);