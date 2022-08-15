import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;  

    &.checkbox {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
    }
`;

export const LabelDiv = styled.div`
    display: flex;
    width: 100%;
    gap: 3rem;    
`;

export const SplitButtonContainer = styled.div`
 &.btnActive {
    opacity: 0;
    visibility: hidden;
    &.active {
    opacity: 1;
    visibility: visible;        
    }
    }
    z-index: 10;
`;

export const RemoveBtn = styled.button`
    background: transparent;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(11)};
    line-height: ${toRem(18)};    
    padding: 0;
    height:${toRem(18)}; 
    border: none;
    text-decoration: underline white;
    margin-right: ${toRem(11)};  
    z-index: 10;      
`;

export const LiStyled = styled.li`    
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: ${toRem(11)};
    line-height: ${toRem(18)};
    color: #FFFFFF;     
    white-space: nowrap;
    overflow: hidden;       
    padding-left: ${toRem(8)};          
`;

export const MoreBtnContainer = styled.div`
    display: grid;
    justify-items: end;
`;

export const CertificatesErrorMessage = styled.p`
    font-family: "Nunito", sans-serif;
    font-size: ${toRem(14)};
    text-align: right;
    color: ${(props) => props.limitErrorColor};
    font-weight: 400;  
    margin-top: ${toRem(5)};
    max-width: 30ch;
    line-height: ${toRem(18)};     
    &.limit {
    opacity: 0;
    &.active {
    opacity: 1;
    visibility: visible;    
    }
    }
`;