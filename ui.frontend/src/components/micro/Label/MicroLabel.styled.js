import styled from "styled-components";
import {toRem} from '../../../utils/convertToRem';

export const LabelStyled = styled.label`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    line-height: ${toRem(16)};
    color: ${(props) => props.labelColor};

    &.inputs {
        font-size: ${toRem(14)};
    }
    
    &.birthday {
        font-size: ${toRem(18)};
    }

    &.checkbox{
        font-size: ${toRem(16)};
        line-height: ${toRem(18)};
    }
`;