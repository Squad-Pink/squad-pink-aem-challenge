import styled from "styled-components"
import { toRem } from "./utils/convertToRem"

export const Container = styled.div`
display: flex;
background: white;
border-radius: ${toRem(20)};
width: ${toRem(617)};
margin: auto;
max-height: ${toRem(763)};
margin-top: ${toRem(69)};
flex-direction: column;  
padding: auto;
@media (max-width: 768px) {
  width: 100%;
  margin-top: ${toRem(30)
}}
`;