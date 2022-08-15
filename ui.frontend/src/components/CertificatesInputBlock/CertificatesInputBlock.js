import React from 'react';
import Label from '../Micro/Label/MicroLabel';
import Input from '../Micro/Input/Input';
import { InputDiv, LabelDiv, SplitButtonContainer, RemoveBtn, LiStyled, MoreBtnContainer, CertificatesErrorMessage } from './CertificatesInputBlock.styled';
import ErrorMessage from '../Micro/ErrorMessage/ErrorMessage';

const CertificatesInputBlock = ({ 
    register, 
    label, 
    labelColor, 
    type, 
    placeholderColor, 
    id, 
    borderColor, 
    placeholder, 
    value, 
    text, 
    colorButton, 
    firstIcon, 
    secondIcon, 
    textButton, 
    src, 
    src1, 
    errorText, 
    colorError, 
    errors, 
    limitErrorText 
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
                <Input placeholderColor={placeholderColor}
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
                    firstIcon={firstIcon}
                    secondIcon={secondIcon}
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
            <MoreBtnContainer>
                <Button
                    textButton={textButton}
                    colorButton={colorButton}
                    src={src}
                    src1={src1}
                    type="button"
                    id="More"
                    onClick={handleClick} />
                <ErrorMessage className="certificatesError" type={type} errorText={errorText} colorError={colorError} errors={errors}  />
                <CertificatesErrorMessage className={`limit ${isActive ? "active" : "inactive"}`}>
                    {limitErrorText}</CertificatesErrorMessage>
            </MoreBtnContainer>
        </>
    )
}

export default CertificatesInputBlock;
