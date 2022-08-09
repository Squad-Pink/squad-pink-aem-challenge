import React from 'react';
import { ErrorStyled } from './ErrorMessage.styled';

const ErrorMessage = ({errorText, colorError, errors, type}) => {
  return (
    errors[type] && <ErrorStyled colorError={colorError}> {errorText} </ErrorStyled>
  );
}

export default ErrorMessage;