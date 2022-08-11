import React, { useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Button from "../Micro/Button/Button";
import {
  CertificatesStyled,
  UlStyled,
  SplitButtonContainer,
} from "./SplitButton.styled";

const SplitButton = ({ list, id, text, colorButton }) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const onBlur = () => setIsActive(false);

  return (
    <SplitButtonContainer>
      <Button
        type='certificates'
        id='Certificates'
        textButton={text}
        colorButton={colorButton}
        onClick={onClick}
        onBlur={onBlur}
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
};

export default MapTo("reactapp/components/split-button")(SplitButton);
