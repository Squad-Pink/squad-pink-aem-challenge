import React, {useEffect} from "react";
import { InputBlock } from "../InputBlock/InputBlock";
import { useForm } from "react-hook-form";
import Button from "../Micro/Button/Button";
import { MapTo } from "@adobe/aem-react-editable-components";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useHistory} from "react-router-dom"

import { FormContent, InputFormGroup, ButtonFormGroup, Container } from "./Social.styled";

const schema = yup
  .object({
    'GitHub *': yup.string().url().required(),
  })
  .required();

const Social = ({
  socialContainer,
  submitBtnTitle,
  submitBtnColor,
  submitColorText,
  submitFirstIcon = {},
  submitSecondIcon = {},
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const validated = true;

  const onSubmit = (data) => {
    saveLocal(data);
    localStorage.setItem("Validated Social", validated);
    history.push("/content/reactapp/us/en/home/certificates");
  }
  
  const saveLocal = (value) => {
    let localValues = Object.entries(value);
    for (let i = 0; i < localValues.length; i++) {
      localStorage.setItem(localValues[i][0], localValues[i][1]);
    }
  };

  useEffect(() => {
    const linkedInStorage = localStorage.getItem('LinkedIn') ;
    const gitHubStorage = localStorage.getItem('GitHub *');
    setValue('LinkedIn', linkedInStorage)
    setValue('GitHub *', gitHubStorage)
  }, [])

  const TYPES = {
    type1: "text",
    type2: "url",
    type3: "tel",
    type4: "email",
    type5: "checkbox",
  };
  return (
    <Container>
    <div className='formContainer'>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        {socialContainer.map(
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
        <ButtonFormGroup>
          <Button
            type='submit'
            textButton={submitBtnTitle}
            colorButton={submitBtnColor}
            colorTextButton={submitColorText}
            src={submitFirstIcon.src}
            src1={submitSecondIcon.src}
            id='Submit'
          />
        </ButtonFormGroup>
      </FormContent>      
    </div>
    </Container>
  );
  
};

Social.defaultProps = {
  socialContainer: [
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
  submitBtnTitle: "Digite o texto do botão",
  submitBtnColor: "Escolha a cor do botão",
  submitColorText: "Escolha a cor do texto ",
  submitFirstIcon:
    "https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
  submitSecondIcon:
    "https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
};

Social.propTypes = {
  socialContainer: [
    {
      inputType: PropTypes.string,
    },
  ],
};

export default MapTo("reactapp/components/social-container")(Social);
