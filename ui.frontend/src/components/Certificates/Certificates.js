import React, { useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Button from "../Micro/Button/Button";
import { CertificatesForm, CertificatesInput, DataInputsContainer, SubmitButtonContainer, } from "./Certificates.styled";
import { InputBlock } from "../InputBlock/InputBlock"

const Certificates = (
    certificatesContainer,
    dataCertificatesContainer,
    submitBtnTitle,
    submitBtnColor,
    submitColorText,
    submitFirstIcon = {},
    submitSecondIcon = {},
) => {

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
        <CertificatesForm>
            {certificatesContainer.map(({  },index) => (
            <CertificatesInput key={index}>

            </CertificatesInput>
            ))}; 
            {dataCertificatesContainer.map(({
                inputType,
                inputLabelText,
                inputLabelColor,
                inputErrorText,
                inputColorError,
                inputPlaceholderText,
                inputBorderColor,
            }, index))};
            <DataInputsContainer key={index}>
                <InputBlock
                    register
                    errors={errors}
                    type={TYPES[inputType]}
                    label={inputLabelText}
                    labelColor={inputLabelColor}
                    errorText={inputErrorText}
                    colorError={inputErrorColor}
                    placeholder={inputPlaceholderText}
                    borderColor={inputBorderColor} />
                id={inputLabelText}
            </DataInputsContainer>
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
    )
}
Certificates.defaultProps = {
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
};

export default MapTo("reactapp/components/certificates-container")(Certificates);