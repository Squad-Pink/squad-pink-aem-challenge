import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const FormBasic = styled.form`
   display: grid;
   width: 100%;
   margin: 0 auto;
   padding: 0 3rem ;
   grid-template-columns: 67% 30%;
   column-gap: 1rem;

   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem ;
  }

`;

export const InputFormGroup = styled.div`
    display: grid;
    margin-bottom: ${toRem(26)};

    &.Full {
        display: grid;
        grid-column: 1 / 3;
    }

    &.Nickname {
        display: grid;
        grid-column: 1 / 3;
    }
    
    &.Email{
       display: flex;
       grid-column: 1 / 2;
    }

    &.Phone{
      display: flex;
      grid-column: 2 / 3;     
   }

   @media (max-width: 768px) {
        margin-bottom: ${toRem(20)};
    }
`;

export const BirthdayDiv = styled.div`
    display: grid;
    grid-column: 1 / 3;
`;

export const CheckboxDiv = styled.div`
    display: grid;
    grid-column: 1 / 3;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 3.5rem;
    grid-column: 2 / 3;

    @media (max-width: 768px) {
        margin-top: 1.2rem;
    }
`;

export const Container = styled.div`
    display: flex;
    background: white;
    border-radius: 0 0 ${toRem(20)} ${toRem(20)}  ;
    width: ${toRem(617)};
    margin: auto;
    height: ${toRem(553)};
    flex-direction: column;  
    padding: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`;