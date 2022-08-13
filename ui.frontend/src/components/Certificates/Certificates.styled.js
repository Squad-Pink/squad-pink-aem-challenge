import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const CertificatesForm = styled.form`
    margin-right: ${toRem(55)};
    margin-left: ${toRem(47)};
    width: 100%;
    display: grid;
    grid-template-columns: 22.5% 77.5%;
    grid-template-rows: auto ${toRem(77)} auto auto;
    @media (max-width: 768px) {
        margin-right: 1.5rem;
        margin-left: 1.5rem;
    }
`;

export const CertificatesInput = styled.div`
     grid-column: 1 / 3;    
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

export const MoreBtnContainer = styled.div`
    display: grid;
    justify-items: end;
`;

export const DataInputsContainer = styled.div`
    grid-column: 1 / 3;
    margin-top: ${toRem(3)};
`;

export const SubmitButtonContainer = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: right;
    margin-top: ${toRem(55)};
    margin-bottom: ${toRem(34)};
`;

export const CertificatesErrorMessage = styled.p`
    font-family: "Nunito", sans-serif;
    font-size: ${toRem(14)};
    text-align: right;
    color: #FF0000;
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
