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
  height: ${toRem(103)};
  display: grid;
  grid-template-rows: 24.64% 18.84% 18.84% 18.84% 18.84%;
  grid-template-columns: 79% 21%;
  margin-top: ${toRem(-6)};
  padding-top: ${toRem(6)};
`;

export const SplitButtonContainer = styled.div`
  z-index: 10;
`;
