import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { TabsContainer, NavTabs, NavLinkStyled, TitleContainer, Container } from "./Tabs.styled";
import Title from "../Micro/Title/Title";
import { useLocation, useHistory } from "react-router-dom";

const Tabs = (props, {tab1, tab2,tab3, tab4}) => {

    const history = useHistory();
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

    const ValidatedBasic = localStorage.getItem("Validated Basic");
    const ValidatedSocial = localStorage.getItem("Validated Social");
    //const ValidatedCertificates = localStorage.getItem("Validated Certificates");
    
    const handleClick1 = () => {
        if(ValidatedBasic ) {
            console.log("passei na basic")
            history.push(props.url1)
        }
        
    }
    const handleClick2 = () => {
        if(ValidatedSocial || ValidatedBasic) {
            console.log("passei na social")
            history.push(props.url2)
        }
    }
    const handleClick3 = () => {
        if(ValidatedSocial) {
            console.log("passei na social")
            history.push(props.url3)
        }
    }

    return (
        <Container >
        <TabsContainer className={tab4}>
            <TitleContainer>
            <Title type="h2" title={props.pageTitle} titleColor={props.pageTitleColor} />
            </TitleContainer>
            <NavTabs className="nav">
                <NavLinkStyled 
               
                onClick={handleClick1}
                className={tab1} 
                titleColor={props.tabTitleColor} 
                borderColor={props.titleBorderColor} 
                titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab1}
                </NavLinkStyled>
                <NavLinkStyled 
                onClick={handleClick2}
                className={tab2} 
                titleColor={props.tabTitleColor} 
                borderColor={props.titleBorderColor} 
                titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab2}
                </NavLinkStyled>
                <NavLinkStyled 
                onClick={handleClick3} 
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





