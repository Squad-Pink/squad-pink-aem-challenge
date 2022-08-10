import styled from "styled-components";
import {toRem} from '../../../utils/convertToRem';

export const ErrorStyled = styled.p`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(14)};
    line-height: ${toRem(16)};
    color: ${(props) => props.colorError};
`;