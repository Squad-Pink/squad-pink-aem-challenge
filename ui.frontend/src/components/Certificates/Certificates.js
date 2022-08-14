import React, { useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import SplitButton from "../SplitButton/SplitButton";
import Button from "../Micro/Button/Button";
import {CertificatesForm, CertificatesInput, SplitButtonContainer, RemoveBtn, MoreBtnContainer, DataInputsContainer, SubmitButtonContainer, CertificatesErrorMessage} from "./Certificates.styled";
import {InputBlock} from "../InputBlock/InputBlock"

const CertificatesContainer = () => {
    const [itemName, setItemName] = useState("");
    const [addedItem, setAddedItem] = useState([]);

    const [btnActive, setBtnActive] = useState(false);
    const activatorBtn = () => setBtnActive(true);

    const [isActive, setIsActive] = useState(false);
    const isError = () => setIsActive(!isActive);

    const itemList = [...addedItem, itemName];

    function handleChange(e) {
        setItemName(e.target.value);
    }

    const removeItem = (itemOption) => () => {
        if (addedItem.length == 5) {
            setAddedItem((addedItem) =>
                addedItem.filter((i) => i !== itemOption)
            );
            isError();
        } else {
            setAddedItem((addedItem) =>
                addedItem.filter((i) => i !== itemOption)
            );
        }
    };

    function handleClick() {
        if (addedItem.length <= 4) {
            setAddedItem([...addedItem, itemName]);
            activatorBtn();
        } else {
            isError();
        }
    };

    return (
        <CertificatesForm>
            .map
            <CertificatesInput key={index}>
                <input onChange={handleChange} />
                <SplitButtonContainer className={`btnActive ${btnActive ? "active" : "inactive"}`}>
                    <SplitButton
                        text={splitTitle}
                        colorButton={splitBtnColor}
                        firstIcon={splitFirstIcon.src}
                        secondIcon={splitSecondIcon.src}
                        id="list"
                        list={addedItem.map((item) => (
                            <>
                                <LiStyled key={item + 1}>{item}</LiStyled>
                                <RemoveBtn
                                    type="button"
                                    id="Remove"
                                    title="...&emsp;X"
                                    onMouseDown={removeItem(item)}
                                />
                            </>
                        ))}
                    />
                </SplitButtonContainer>
                </CertificatesInput>
                <MoreBtnContainer>
                    <Button 
                        textButton={moreBtnTitle}
                        colorButton={moreBtnColor}                        
                        src={moreFirstIcon.src}
                        src1={moreSecondIcon.src}                      
                        type="button" 
                        id="More"                         
                        onClick={handleClick} />
                    {errors.idDoInput && (
                        <CertificatesErrorMessage>{inputErrorMessage}</CertificatesErrorMessage>
                    )}
                    <CertificatesErrorMessage className={`limit ${isActive ? "active" : "inactive"}`}>
                        {limitErrorMessage}</CertificatesErrorMessage>
                </MoreBtnContainer>
                .map                
                <DataInputsContainer key={index}>
                    <InputBlock 
                        register                    
                        errors={errors}
                        type={dataInputType}
                        label={dataInputLabelText}
                        labelColor={dataInputLabelColor}
                        errorText={dataInputErrorText}
                        colorError={dataInputErrorColor}
                        placeholder={dataInputPlaceholderText}
                        placeholderColor={dataInputPlaceholderColor}
                        id={dataInputLabelText}
                        borderColor={dataInputBorderColor}/>
                </DataInputsContainer>
                <SubmitButtonContainer>
                    <Button 
                    type="submit"                     
                    textButton={submitBtnTitle}
                    colorButton={submitBtnColor}                        
                    src={submitFirstIcon.src}
                    src1={submitSecondIcon.src}                                      
                    id="Submit"       
                    />
                </SubmitButtonContainer>
        </CertificatesForm>
    )

    Certificates.defaultProps = {

    }
}

export default MapTo("reactapp/components/certificates-container")(CertificatesContainer);