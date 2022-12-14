import React from 'react'
import { LabelStyled } from './MicroLabel.styled';

const MicroLabel= ({label, labelColor, id }) => {
  return (
    <LabelStyled labelColor={labelColor} className={`${id}`} id={id}> {label} </LabelStyled>
  )
};

export default MicroLabel;