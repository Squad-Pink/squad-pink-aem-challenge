import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 22rem;
  width: 100%;
  border-radius: 1em;
  margin-right: ${toRem(55)};
  margin-left: ${toRem(47)};
  margin-top: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
`;
const FormContent = styled.form`
  width: 100%;
`;

const InputFormGroup = styled.div`
  width: 100%;
  height: 5rem;
`;

const ButtonFormGroup = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 2.25rem;
`;

export { FormContainer, FormContent, InputFormGroup, ButtonFormGroup };
