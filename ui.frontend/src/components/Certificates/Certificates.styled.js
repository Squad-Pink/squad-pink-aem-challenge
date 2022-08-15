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