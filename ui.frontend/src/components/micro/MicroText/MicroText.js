import React from 'react'
import { Text } from './MicroText.styled';

const MicroText = ({TextP, textColor}) => {
  return (
    <Text textColor={textColor}>{TextP}</Text>
  )
};

export default MicroText;