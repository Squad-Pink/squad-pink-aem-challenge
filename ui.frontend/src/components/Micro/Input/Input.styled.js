import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  width: 20px;
  margin: 1rem 0 1rem 0;

  > input {
    display: inline-flex;
    width: 1rem;
    height: 1rem;
    border-radius: 2px;
    accent-color: ${(props) => props.checkboxColor};
    vertical-align: middle;
  }
`;

const Input = styled.input`
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
    color: ${(props) => props.placeholderColor};
    justify-content: center;
  }
`;

export { Input, CheckboxContainer };
