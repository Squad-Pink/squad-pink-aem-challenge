import styled from "styled-components";
import {toRem} from '../../../utils/convertToRem';

export const Text = styled.p`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(16)};
    line-height: ${toRem(18)};
    color: ${(props) => props.textColor};
`;