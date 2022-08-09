import React, { useState } from "react";
import Button from "../Button/Button";
import {
  CertificatesStyled,
  UlStyled,
  SplitButtonContainer,
} from "./SplitButton.styled";

const SplitButton = ({ list, id }) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const onBlur = () => setIsActive(false);

  return (
    <SplitButtonContainer>
      <Button
        type='button'
        id='Certificates'
        title='Certificates'
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

export default SplitButton;
