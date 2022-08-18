import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { TabsContainer, NavTabs, NavLinkStyled, TitleContainer, Container } from "./Tabs.styled";
import Title from "../Micro/Title/Title";
import { useLocation } from "react-router-dom";

const Tabs = (props, {tab1, tab2,tab3, tab4}) => {

    const location = useLocation();
    
        if(location.pathname === "/content/reactapp/us/en/home") {
            tab1 = 'active';
        }
        if(location.pathname === "/content/reactapp/us/en/home/social") {
            tab2 = 'active';
        }
        if(location.pathname === "/content/reactapp/us/en/home/certificates") {
            tab3 = 'active';
        }
        if(location.pathname === "/content/reactapp/us/en/home/sucess") {
            tab4 = 'success';
        }
        
    
    console.log(tab1, tab2,tab3)
    return (
        <Container >
        <TabsContainer className={tab4}>
            <TitleContainer>
            <Title type="h2" title={props.pageTitle} titleColor={props.pageTitleColor} />
            </TitleContainer>
            <NavTabs className="nav">
                <NavLinkStyled 
                to={props.url1} 
                className={tab1} 
                titleColor={props.tabTitleColor} 
                borderColor={props.titleBorderColor} 
                titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab1}
                </NavLinkStyled>
                <NavLinkStyled 
                to={props.url2}
                className={tab2} 
                titleColor={props.tabTitleColor} 
                borderColor={props.titleBorderColor} 
                titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab2}
                </NavLinkStyled>
                <NavLinkStyled 
                to={props.url3} 
                className={tab3} 
                titleColor={props.tabTitleColor} 
                borderColor={props.titleBorderColor} 
                titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab3}
                </NavLinkStyled>    
            </NavTabs>          
        </TabsContainer>
        </Container>
    );
};
export default MapTo("reactapp/components/tabs-nav")(Tabs);





