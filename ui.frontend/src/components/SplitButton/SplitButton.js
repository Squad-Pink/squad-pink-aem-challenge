import React, { useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Button from "../Micro/Button/Button";
import {
  CertificatesStyled,
  UlStyled,
  SplitButtonContainer,
} from "./SplitButton.styled";

const SplitButton = ({
  list,
  id,
  text,
  colorButton,
  firstIcon,
  secondIcon,
}) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const onBlur = () => setIsActive(false);

  return (
    <SplitButtonContainer>
      <Button
        type='certificates'
        id='certificates'
        textButton={text}
        colorButton={colorButton}
        onClick={onClick}
        onBlur={onBlur}
        src={firstIcon.src}
        src1={secondIcon.src}
      />
      <CertificatesStyled
        className={`certificatesDropdown ${isActive ? "active" : "inactive"}`}
      >
        <UlStyled id={id}>{list}</UlStyled>
      </CertificatesStyled>
    </SplitButtonContainer>
  );
};

SplitButton.defaultProps = {
  text: "Digite o texto do botão",
  colorButton: "Escolha a cor do botão",
  firstIcon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3iHi3XBU4eUOnG2XuwSyZtBUQSYPk5Bokg&usqp=CAU",
  secondIcon: "Escolha o segundo ícone",
};

export default MapTo("reactapp/components/split-button")(SplitButton);
