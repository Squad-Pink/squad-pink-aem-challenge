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

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code TabsNav} Sling Model used for the {@code reactapp/components/tabs-nav} component.
 * 
 */
@ConsumerType
public interface TabsNav
    extends ComponentExporter
{


    @JsonProperty("url1")
    String getUrl1();

    @JsonProperty("url2")
    String getUrl2();

    @JsonProperty("url3")
    String getUrl3();

    @JsonProperty("pageTitle")
    String getPageTitle();

    @JsonProperty("pageTitleColor")
    String getPageTitleColor();

    @JsonProperty("titleTab1")
    String getTitleTab1();

    @JsonProperty("titleTab2")
    String getTitleTab2();

    @JsonProperty("titleTab3")
    String getTitleTab3();

    @JsonProperty("tabTitleColor")
    String getTabTitleColor();

    @JsonProperty("titleBorderColor")
    String getTitleBorderColor();

    @JsonProperty("tabTitleActiveColor")
    String getTabTitleActiveColorr();

}
