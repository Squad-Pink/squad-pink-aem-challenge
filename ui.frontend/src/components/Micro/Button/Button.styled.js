import styled from "styled-components";
import { toRem } from "../../../utils/convertToRem";

export const ButtonStyled = styled.button`
  min-width: ${toRem(81)};
  padding: ${toRem(11)};
  height: ${toRem(40)};
  gap: ${toRem(6)};
  border: none;
  border-radius: 4px;
  background: ${(props) => props.colorButton};
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: ${toRem(16)};
  line-height: ${toRem(18)};
  color: ${(props) => props.colorTextButton};
  display: flex;
  align-items: center;
  z-index: 50;
  cursor: pointer;

  &.certificates{
    &:focus {
    width: ${toRem(187)};  
    justify-content: center;      
    gap: ${toRem(18)};
    }   
    }    
`;
