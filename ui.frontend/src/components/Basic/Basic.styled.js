import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const FormBasic = styled.form`
   display: grid;
   max-width: ${toRem(717)} ;
   margin: auto;
   padding: auto;
   grid-template-columns: 70% 30%;
   column-gap: 2rem;

   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
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

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 6rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`;