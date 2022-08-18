import styled from "styled-components"
import { toRem } from "../../utils/convertToRem";
import { Link } from "react-router-dom";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
`;

export const TitleContainer = styled.div`
margin-top:${toRem(40)};
margin-bottom: ${toRem(33)};
margin-left: ${toRem(67)};
`;

export const NavTabs = styled.ul`
  width: 90%;
  margin: 0 ${toRem(67)} ${toRem(32)};
  display: flex;
  border-bottom: ${toRem(1)} solid #aaaaaa; 
`;

export const NavLinkStyled = styled(Link)`
  width: 50% !important;  
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: ${toRem(36)};
  color: ${(props) => props.titleColor};
  text-decoration: none;    
  &.active {
    border-bottom: ${toRem(2)} solid ${(props) => props.borderColor};
    color: ${(props) => props.titleActiveColor}!important;
    &:visited, &:link{
    color: #111111;    
  }   
  } 
`;

export const Container = styled.div`
display: flex;
background: white;
border-radius: ${toRem(20)} ${toRem(20)} 0 0;
width: ${toRem(617)};
margin: auto;
height: ${toRem(186)};
margin-top: ${toRem(69)};
flex-direction: column;  
padding: auto;
@media (max-width: 768px) {
  width: 100%;
  margin-top: ${toRem(30)
}}
`;
