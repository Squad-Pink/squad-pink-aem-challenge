import styled from "styled-components";

const FormContent = styled.form`
  padding: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0.5rem;
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
  margin: 5% 0 0 0;
`;

export const Container = styled.div`
display: flex;
background: white;
border-radius: 0 0 ${toRem(20)} ${toRem(20)}  ;
width: ${toRem(617)};
margin: auto;
max-height: ${toRem(763)};
flex-direction: column;  
padding: auto;
@media (max-width: 768px) {
  width: 100%;
  margin-top: ${toRem(30)
}}
`;

export { FormContent, InputFormGroup, ButtonFormGroup };
