import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const CertificatesStyled = styled.div`
  &.certificatesDropdown {
    opacity: 0;
    visibility: hidden;
    display: none;
    &.active {
      opacity: 1;
      visibility: visible;
      display: block;
    }
  }
`;

export const UlStyled = styled.ul`
  background: ${(props) => props.colorDivSplitBtn};
  border-radius: ${toRem(4)};
  width: ${toRem(187)};  
  max-height: ${toRem(103)};
  row-gap: ${toRem(2)};
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: 79% 21%;
  margin-top: ${toRem(-6)};
  padding-top: ${toRem(6)};
`;

export const SplitButtonContainer = styled.div`
  z-index: 10;
`;
