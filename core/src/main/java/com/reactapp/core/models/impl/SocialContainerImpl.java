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

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.SocialContainer;
import com.reactapp.core.models.socialContainerModel;
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
    SocialContainer.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/social-container")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class SocialContainerImpl
    implements SocialContainer
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<socialContainerModel> socialContainer;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String submitBtnTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String submitBtnColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String submitColorText;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image submitFirstIcon;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image submitSecondIcon;
    @SlingObject
    private Resource resource;

    @Override
    public List<socialContainerModel> getSocialContainer() {
        return socialContainer != null ? Collections.unmodifiableList(socialContainer) : null;
    }

    @Override
    @JsonProperty("submitBtnTitle")
    public String getSubmitBtnTitle() {
        return submitBtnTitle;
    }

    @Override
    @JsonProperty("submitBtnColor")
    public String getSubmitBtnColor() {
        return submitBtnColor;
    }

    @Override
    @JsonProperty("submitColorText")
    public String getSubmitColorText() {
        return submitColorText;
    }

    @Override
    @JsonProperty("submitFirstIcon")
    public com.adobe.cq.wcm.core.components.models.Image getSubmitFirstIcon() {
        return submitFirstIcon;
    }

    @Override
    @JsonProperty("submitSecondIcon")
    public com.adobe.cq.wcm.core.components.models.Image getSubmitSecondIcon() {
        return submitSecondIcon;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
