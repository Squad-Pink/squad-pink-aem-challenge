import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;  

    &.I {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
    }
`;

export const LabelDiv = styled.div`
    display: flex;
    width: 100%;
    gap: 3rem;    

    @media (max-width: 768px) {
        gap: 1rem;   
    }
`;


