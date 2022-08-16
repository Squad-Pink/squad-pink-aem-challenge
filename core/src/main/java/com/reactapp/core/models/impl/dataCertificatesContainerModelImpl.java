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
import com.reactapp.core.models.dataCertificatesContainerModel;
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
    dataCertificatesContainerModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class dataCertificatesContainerModelImpl
    implements dataCertificatesContainerModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputType;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputLabelText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputLabelColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputErrorText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputColorError;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputPlaceholderText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputBorderColor;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("inputType")
    public String getInputType() {
        return inputType;
    }

    @Override
    @JsonProperty("inputLabelText")
    public String getInputLabelText() {
        return inputLabelText;
    }

    @Override
    @JsonProperty("inputLabelColor")
    public String getInputLabelColor() {
        return inputLabelColor;
    }

    @Override
    @JsonProperty("inputErrorText")
    public String getInputErrorText() {
        return inputErrorText;
    }

    @Override
    @JsonProperty("inputColorError")
    public String getInputColorError() {
        return inputColorError;
    }

    @Override
    @JsonProperty("inputPlaceholderText")
    public String getInputPlaceholderText() {
        return inputPlaceholderText;
    }

    @Override
    @JsonProperty("inputBorderColor")
    public String getInputBorderColor() {
        return inputBorderColor;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
