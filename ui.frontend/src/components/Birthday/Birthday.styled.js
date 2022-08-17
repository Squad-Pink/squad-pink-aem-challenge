import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const Result = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 2.5em;
  font-family: "Nunito", sans-serif;
  color: #767676;
  font-weight: 400;
  font-size: 1rem;
  background: #ffffff;
  border: 0.125rem solid ${(props) => props.borderColor};
  border-radius: 3px;
  padding: 0.188rem;
  &::placeholder {
    height: 1.25rem;
    font-family: "Nunito", sans-serif;
    color: #767676;
    justify-content: center;
  }
`;

export const BirthdayContainer = styled.div` 
  display: grid;  
  grid-template-rows: auto auto;   
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: 21% 21% 21% auto;  
  gap: 1.375rem;
  grid-row: 2 / 3; 
  @media (max-width: 768px) {
    grid-template-columns: auto 50%;    
    
  }
`;