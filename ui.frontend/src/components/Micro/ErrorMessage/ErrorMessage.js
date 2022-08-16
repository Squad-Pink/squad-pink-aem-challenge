import React from 'react';
import { ErrorStyled } from './ErrorMessage.styled';

const ErrorMessage = ({errorText, colorError, errors, id}) => {
  return errors[id] ? <ErrorStyled colorError={colorError}> {errorText} </ErrorStyled> : ""
}

export default ErrorMessage;