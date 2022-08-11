import { React } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { TabsContainer, NavTabs, NavLinkStyled } from "./Tabs.styled";
import Title from "../Micro/Title/Title";


const Tabs = (props) => {
       
    return (
        <TabsContainer>
            <Title type="h2" title={props.pageTitle} titleColor={props.pageTitleColor} />
            <NavTabs className="nav">
                <NavLinkStyled to={props.url1} titleColor={props.tabTitleColor} borderColor={props.titleBorderColor} titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab1}
                </NavLinkStyled>
                <NavLinkStyled to={props.url2} titleColor={props.tabTitleColor} borderColor={props.titleBorderColor} titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab2}
                </NavLinkStyled>
                <NavLinkStyled to={props.url3} titleColor={props.tabTitleColor} borderColor={props.titleBorderColor} titleActiveColor={props.tabTitleActiveColor}>
                    {props.titleTab3}
                </NavLinkStyled>                
            </NavTabs>
        </TabsContainer>
    );
};
export default MapTo("reactapp/components/tabs-nav")(Tabs);





