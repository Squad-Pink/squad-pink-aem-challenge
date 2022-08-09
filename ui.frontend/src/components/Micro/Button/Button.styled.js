import styled from "styled-components";
import {toRem} from '../../../utils/convertToRem';

export const ButtonStyled = styled.button`
    width: ${toRem(81)};
    height: ${toRem(40)};
    border: none;
    border-radius: 4px;
    background: ${(props) => props.colorButton};
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(16)};
    line-height: ${toRem(18)};
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &.two {
        width: ${toRem(109)};  
    }
`;