import React, { useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Button from "../Micro/Button/Button";
import { CertificatesForm, CertificatesInput, DataInputsContainer, SubmitButtonContainer, Container } from "./Certificates.styled";
import { InputBlock } from "../InputBlock/InputBlock"
import CertificatesInputBlock from "../CertificatesInputBlock/CertificatesInputBlock";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    'Certificates':yup.string().required(),
    'Team Name*':yup.string().required(),
    'Institution*':yup.string().required(),
    'Graduation':yup.string().required(),
}).required()

const Certificates = ({    
    certificatesContainer,
    dataCertificatesContainer,
    submitBtnTitle,
    submitBtnColor,
    submitColorText,
    submitFirstIcon ={},
    submitSecondIcon ={},
}) => {

    const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => saveLocal(data)

    const saveLocal = (value) => {
        let localValues = Object.entries(value)
        for(let i = 0; i < localValues.length; i++) {
          localStorage.setItem(localValues[i][0],localValues[i][1])
        }
    }

    

    const CERTIFICATESTYPES = {
        type1: "text",
        type2: "url",
        type3: "tel",
        type4: "email",
    };
    const TYPES = {
        type1: "text",
        type2: "url",
        type3: "tel",
        type4: "email",
        type5: "checkbox",
    };
  
   
    return (
        <Container>
        <CertificatesForm onSubmit={handleSubmit(onSubmit)}>
            {certificatesContainer.map(({
                certificatesInputType,
                certificatesLabelText,
                certificatesLabelColor,
                certificatesPlaceholderText,                
                certificatesBorderColor,
                certificatesSplitText,
                certificatesBtnColor,
                certificatesBtnTextColor,
                certificatesSplitFirstIcon ={},
                certificatesSplitSecondIcon ={},
                certificatesSplitDivColor,
                certificatesMoreText,
                certificatesBtnFirstIcon ={},
                certificatesBtnSecondIcon={},
                certificatesErrorText,
                certificatesErrorColor,
                certificatesLimitErrorText
             }, index) => (
                <CertificatesInput key={index}>
                    <CertificatesInputBlock
                        register={register}
                        errors={errors}
                        type={CERTIFICATESTYPES[certificatesInputType]} 
                        label={certificatesLabelText}
                        labelColor={certificatesLabelColor}
                        placeholder={certificatesPlaceholderText}                        
                        borderColor={certificatesBorderColor} 
                        id={certificatesLabelText}                  
                        text={certificatesSplitText} 
                        colorButton={certificatesBtnColor}
                        colorTextButton={certificatesBtnTextColor}
                        firstIcon={certificatesSplitFirstIcon.src} 
                        secondIcon={certificatesSplitSecondIcon.src}
                        colorDivSplitBtn={certificatesSplitDivColor}
                        textButton={certificatesMoreText} 
                        src={certificatesBtnFirstIcon.src}
                        src1={certificatesBtnSecondIcon.src}
                        errorText={certificatesErrorText} 
                        colorError={certificatesErrorColor}                        
                        limitErrorText={certificatesLimitErrorText} 
                        limiteErrorColor={certificatesErrorColor}
                    />
                </CertificatesInput>
            ))}
            {dataCertificatesContainer.map(({
                inputType,
                inputLabelText,
                inputLabelColor,
                inputErrorText,
                inputColorError,
                inputPlaceholderText,
                inputBorderColor,
            }, index) => (
            <DataInputsContainer key={index}>
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
                    id={inputLabelText}/>
            </DataInputsContainer>
            ))}
            <SubmitButtonContainer>
                <Button
                    type="submit"
                    textButton={submitBtnTitle}
                    colorButton={submitBtnColor}
                    colorTextButton={submitColorText}
                    src={submitFirstIcon.src}
                    src1={submitSecondIcon.src}
                    id="Submit"                    
                />
            </SubmitButtonContainer>
        </CertificatesForm>
        </Container>
    )
}
Certificates.defaultProps = {
    certificatesContainer:[
        {
            certificatesInputType: "Escolha o tipo de input",
            certificatesLabelText: "Digite o texto da label",
            certificatesLabelColor: "Escolha a cor da label",
            certificatesPlaceholderText: "Digite o texto do placeholder",            
            certificatesBorderColor: "Escolha a cor da borda do input",
            certificatesSplitText: "Digite o texto do splitButton",
            certificatesBtnColor: "Escolha a cor dos botões",
            certificatesSplitFirstIcon: "https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
            certificatesSplitSecondIcon: "https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
            certificatesMoreText: "Digite o texto do botão de adicionar itens na lista",
            certificatesBtnFirstIcon: "https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
            certificatesBtnSecondIcon:"https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-22.png",
            certificatesErrorText: "Digite o texto da mensagem de erro",
            certificatesErrorColor: "Escolha a cor da mensagem de erro",
            certificatesLimitErrorText: "Digite o texto da mensagem de erro sobre o limite",   
        }
    ],

    dataCertificatesContainer: [
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

Certificates.propTypes = {
    dataCertificatesContainer: [
        {
            inputType: PropTypes.string,
        },
    ],
    certificatesContainer: [
        {
            certificatesInputType: PropTypes.string,
        }
    ]
};

export default MapTo("reactapp/components/certificates-container")(Certificates);