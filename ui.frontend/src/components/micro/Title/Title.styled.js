import styled from "styled-components";
import {toRem} from '../../../utils/convertToRem';

const FormsTitle = styled.h1`
    width: ${toRem(150)};
    height: ${toRem(24)};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(18)};
    line-height: ${toRem(24)};
    color: #111111;
    justify-content: center;
`

const SignUpTitle = styled.h2`
    width: ${toRem(150)};
    height: ${toRem(24)};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: ${toRem(18)};
    line-height: ${toRem(24)};
    color: #111111;
    justify-content: center;
`

const TabTitle = styled.h3`
    width: ${toRem(300)};
    height: ${toRem(48)};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: ${toRem(40)};
    line-height: ${toRem(48)};
    color: ${(props) => props.titleColor};
    justify-content: center;
`

const TitleStyled = styled.h4`
    width: 755px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #111111;
`

export { FormsTitle, SignUpTitle, TabTitle, TitleStyled }