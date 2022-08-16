import React, { useState } from "react";
import Label from '../Micro/Label/MicroLabel';
import Input from '../Micro/Input/Input';
import SplitButton from '../SplitButton/SplitButton';
import Button from "../Micro/Button/Button";
import { InputDiv, LabelDiv, SplitButtonContainer, RemoveBtn, LiStyled, MoreBtnContainer, CertificatesErrorMessage } from './CertificatesInputBlock.styled';
import ErrorMessage from '../Micro/ErrorMessage/ErrorMessage';

const CertificatesInputBlock = ({ 
    register, 
    label, 
    labelColor, 
    type,     
    id, 
    borderColor, 
    placeholder, 
    value, 
    text, 
    colorButton, 
    colorTextButton,
    firstIcon, 
    secondIcon, 
    textButton, 
    src, 
    src1, 
    errorText, 
    colorError, 
    errors, 
    limitErrorColor,
    limitErrorText, 
    colorDivSplitBtn
    }) => {

    const [btnActive, setBtnActive] = useState(false);
    const activatorBtn = () => setBtnActive(true);

    const [addedItem, setAddedItem] = useState([]);
    const [itemName, setItemName] = useState("");

    const [isActive, setIsActive] = useState(false);
    const isError = () => setIsActive(!isActive);

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

    function handleChange(e) {
        setItemName(e.target.value);
    }

    function handleClick() {               
        if (addedItem.length <= 4) {
            setAddedItem([...addedItem, itemName]);
            activatorBtn();
        } else {
            isError();
        }        
    };

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
        default:
            type = "aaa"
    }

    return (
        <>
            <InputDiv className={id}>
                <LabelDiv>
                    <Label label={label} labelColor={labelColor} id={id} />
                </LabelDiv>
                <Input 
                    borderColor={borderColor}
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    register={register}
                />
            </InputDiv>
            <SplitButtonContainer className={`btnActive ${btnActive ? "active" : "inactive"}`}>
                <SplitButton
                    text={text}
                    colorButton={colorButton}
                    colorTextButton={colorTextButton}
                    firstIcon={firstIcon}
                    secondIcon={secondIcon}
                    colorDivSplitBtn={colorDivSplitBtn}
                    id="list"
                    list={addedItem.map((item) => (
                        <>
                            <LiStyled key={item + 1}>{item}</LiStyled>
                            <RemoveBtn
                                type="button"
                                id="Remove"
                                onMouseDown={removeItem(item)}>
                                ...&emsp;X                                
                                </RemoveBtn>                            
                        </>
                    ))}
                />
            </SplitButtonContainer>
            <MoreBtnContainer>
                <Button
                    textButton={textButton}
                    colorButton={colorButton}
                    colorTextButton={colorTextButton}
                    src={src}
                    src1={src1}
                    type="button"
                    id="More"
                    onClick={handleClick}/>
                <ErrorMessage className="certificatesError" id={id} errorText={errorText} colorError={colorError} errors={errors}  />
                <CertificatesErrorMessage className={`limit ${isActive ? "active" : "inactive"}`} limitErrorColor={colorError}>
                    {limitErrorText}</CertificatesErrorMessage>
            </MoreBtnContainer>
        </>
    )
}

export default CertificatesInputBlock;
