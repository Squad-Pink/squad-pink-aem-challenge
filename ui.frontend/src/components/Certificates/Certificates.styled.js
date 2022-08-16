import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const CertificatesForm = styled.form`
    margin-right: ${toRem(55)};
    margin-left: ${toRem(47)};
    max-width: ${toRem(617)};
    margin: auto;
    display: grid;
    grid-template-columns: 22.5% 77.5%;
    grid-template-rows: auto auto auto auto;
    @media (max-width: 768px) {
        margin-right: 1.5rem;
        margin-left: 1.5rem;
    }
`;

export const CertificatesInput = styled.div`
    grid-column: 1 / 3;    
    display: grid;
    grid-template-columns: 50% 50%;     
    max-height: ${toRem(150)};
`;

export const DataInputsContainer = styled.div`
    grid-column: 1 / 3;
    margin-top: ${toRem(26)};
`;

export const SubmitButtonContainer = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: right;
    margin-top: ${toRem(55)};
    margin-bottom: ${toRem(34)};
`;