import styled from "styled-components";
import { toRem } from "../../../utils/convertToRem";

export const SelectStyled = styled.select`
  box-sizing: border-box;
  width: 100%;
  height: ${toRem(39)};
  background: #ffffff;
  border: 0.125rem solid ${(props) => props.borderColor};;
  border-radius: ${toRem(4)};
  padding: ${toRem(9)} ${toRem(10)};
  font-family: "Nunito", sans-serif;
  color: #767676;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  vertical-align: middle; 
`;

export const OptionStyled = styled.option`
  padding: 0;
  min-height: ${toRem(18)};
  color: ${(props) => props.optionColor};
`;