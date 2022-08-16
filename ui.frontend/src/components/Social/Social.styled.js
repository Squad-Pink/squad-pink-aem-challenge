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

export { FormContent, InputFormGroup, ButtonFormGroup };
