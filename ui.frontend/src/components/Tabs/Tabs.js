import React,{ useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { TabsContainer, NavTabs, NavLinkStyled, TitleContainer, Container } from "./Tabs.styled";
import Title from "../Micro/Title/Title";

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {        
        setActiveTab("tab1");
      };
    
      const handleTab2 = () => {      
        setActiveTab("tab2");
      };

      const handleTab3 = () => {      
        setActiveTab("tab3");
      };

      console.log(activeTab)
    return (
        <Container>
        <TabsContainer>
            <TitleContainer>
            <Title type="h2" title={props.pageTitle} titleColor={props.pageTitleColor} />
            </TitleContainer>
            <NavTabs className="nav">
                <NavLinkStyled 
                to={props.url1} 
                className={activeTab === "tab1" ? "active" : ""} 
                onClick={handleTab1}
                titleColor={props.tabTitleColor} 
                borderColor={props.titleBorderColor} 
                titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab1}
                </NavLinkStyled>
                <NavLinkStyled 
                to={props.url2}
                onClick={handleTab2}
                className={activeTab === "tab2" ? "active" : ""}  
                titleColor={props.tabTitleColor} 
                borderColor={props.titleBorderColor} 
                titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab2}
                </NavLinkStyled>
                <NavLinkStyled 
                to={props.url3} 
                onClick={handleTab3}
                className={activeTab === "tab3" ? "active" : ""} 
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





