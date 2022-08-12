import styled from "styled-components"
import { toRem } from "../../utils/convertToRem";
import { NavLink } from "react-router-dom";

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

export const NavLinkStyled = styled(NavLink)`
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
