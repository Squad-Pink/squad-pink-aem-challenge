import styled from "styled-components";
import { toRem } from "../../utils/convertToRem"

const FormContent = styled.form`
  padding: 0 3rem ;
  width: 100%;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InputFormGroup = styled.div`
  width: 100%;
  height: 5.8rem;
`;

const ButtonFormGroup = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row-reverse;
  margin: 55% 0 0 0;
    @media (max-width: 768px) {
      margin: 5% 0 0 0;
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

export { FormContent, InputFormGroup, ButtonFormGroup };
