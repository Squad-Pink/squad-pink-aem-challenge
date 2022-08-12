/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.TabsNav;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    TabsNav.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/tabs-nav")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TabsNavImpl
    implements TabsNav
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String url1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String url2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String url3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String pageTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String pageTitleColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleTab1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleTab2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleTab3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String tabTitleColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleBorderColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String tabTitleActiveColorr;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("url1")
    public String getUrl1() {
        return url1;
    }

    @Override
    @JsonProperty("url2")
    public String getUrl2() {
        return url2;
    }

    @Override
    @JsonProperty("url3")
    public String getUrl3() {
        return url3;
    }

    @Override
    @JsonProperty("pageTitle")
    public String getPageTitle() {
        return pageTitle;
    }

    @Override
    @JsonProperty("pageTitleColor")
    public String getPageTitleColor() {
        return pageTitleColor;
    }

    @Override
    @JsonProperty("titleTab1")
    public String getTitleTab1() {
        return titleTab1;
    }

    @Override
    @JsonProperty("titleTab2")
    public String getTitleTab2() {
        return titleTab2;
    }

    @Override
    @JsonProperty("titleTab3")
    public String getTitleTab3() {
        return titleTab3;
    }

    @Override
    @JsonProperty("tabTitleColor")
    public String getTabTitleColor() {
        return tabTitleColor;
    }

    @Override
    @JsonProperty("titleBorderColor")
    public String getTitleBorderColor() {
        return titleBorderColor;
    }

    @Override
    @JsonProperty("tabTitleActiveColor")
    public String getTabTitleActiveColorr() {
        return tabTitleActiveColorr;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
