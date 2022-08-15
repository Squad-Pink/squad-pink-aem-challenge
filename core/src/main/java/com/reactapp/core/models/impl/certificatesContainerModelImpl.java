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

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.certificatesContainerModel;
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
    certificatesContainerModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class certificatesContainerModelImpl
    implements certificatesContainerModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesInputType;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesLabelText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesLabelColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesPlaceholderText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesBorderColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesSplitText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesBtnColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesBtnTextColor;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image certificatesSplitFirstIcon;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image certificatesSplitSecondIcon;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesSplitDivColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesMoreText;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image certificatesBtnFirstIcon;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image certificatesBtnSecondIcon;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesErrorText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesLimitErrorText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesErrorColor;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("certificatesInputType")
    public String getCertificatesInputType() {
        return certificatesInputType;
    }

    @Override
    @JsonProperty("certificatesLabelText")
    public String getCertificatesLabelText() {
        return certificatesLabelText;
    }

    @Override
    @JsonProperty("certificatesLabelColor")
    public String getCertificatesLabelColor() {
        return certificatesLabelColor;
    }

    @Override
    @JsonProperty("certificatesPlaceholderText")
    public String getCertificatesPlaceholderText() {
        return certificatesPlaceholderText;
    }

    @Override
    @JsonProperty("certificatesBorderColor")
    public String getCertificatesBorderColor() {
        return certificatesBorderColor;
    }

    @Override
    @JsonProperty("certificatesSplitText")
    public String getCertificatesSplitText() {
        return certificatesSplitText;
    }

    @Override
    @JsonProperty("certificatesBtnColor")
    public String getCertificatesBtnColor() {
        return certificatesBtnColor;
    }

    @Override
    @JsonProperty("certificatesBtnTextColor")
    public String getCertificatesBtnTextColor() {
        return certificatesBtnTextColor;
    }

    @Override
    @JsonProperty("certificatesSplitFirstIcon")
    public com.adobe.cq.wcm.core.components.models.Image getCertificatesSplitFirstIcon() {
        return certificatesSplitFirstIcon;
    }

    @Override
    @JsonProperty("certificatesSplitSecondIcon")
    public com.adobe.cq.wcm.core.components.models.Image getCertificatesSplitSecondIcon() {
        return certificatesSplitSecondIcon;
    }

    @Override
    @JsonProperty("certificatesSplitDivColor")
    public String getCertificatesSplitDivColor() {
        return certificatesSplitDivColor;
    }

    @Override
    @JsonProperty("certificatesMoreText")
    public String getCertificatesMoreText() {
        return certificatesMoreText;
    }

    @Override
    @JsonProperty("certificatesBtnFirstIcon")
    public com.adobe.cq.wcm.core.components.models.Image getCertificatesBtnFirstIcon() {
        return certificatesBtnFirstIcon;
    }

    @Override
    @JsonProperty("certificatesBtnSecondIcon")
    public com.adobe.cq.wcm.core.components.models.Image getCertificatesBtnSecondIcon() {
        return certificatesBtnSecondIcon;
    }

    @Override
    @JsonProperty("certificatesErrorText")
    public String getCertificatesErrorText() {
        return certificatesErrorText;
    }

    @Override
    @JsonProperty("certificatesLimitErrorText")
    public String getCertificatesLimitErrorText() {
        return certificatesLimitErrorText;
    }

    @Override
    @JsonProperty("certificatesErrorColor")
    public String getCertificatesErrorColor() {
        return certificatesErrorColor;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
