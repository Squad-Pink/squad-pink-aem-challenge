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
 * Defines the {@code certificatesContainerModel} Sling Model used for the multifield in {@code reactapp/components/certificates-container} component.
 * 
 */
@ConsumerType
public interface certificatesContainerModel
    extends ComponentExporter
{


    @JsonProperty("certificatesInputType")
    String getCertificatesInputType();

    @JsonProperty("certificatesLabelText")
    String getCertificatesLabelText();

    @JsonProperty("certificatesLabelColor")
    String getCertificatesLabelColor();

    @JsonProperty("certificatesPlaceholderText")
    String getCertificatesPlaceholderText();

    @JsonProperty("certificatesBorderColor")
    String getCertificatesBorderColor();

    @JsonProperty("certificatesSplitText")
    String getCertificatesSplitText();

    @JsonProperty("certificatesBtnColor")
    String getCertificatesBtnColor();

    @JsonProperty("certificatesBtnTextColor")
    String getCertificatesBtnTextColor();

    @JsonProperty("certificatesSplitFirstIcon")
    com.adobe.cq.wcm.core.components.models.Image getCertificatesSplitFirstIcon();

    @JsonProperty("certificatesSplitSecondIcon")
    com.adobe.cq.wcm.core.components.models.Image getCertificatesSplitSecondIcon();

    @JsonProperty("certificatesSplitDivColor")
    String getCertificatesSplitDivColor();

    @JsonProperty("certificatesMoreText")
    String getCertificatesMoreText();

    @JsonProperty("certificatesBtnFirstIcon")
    com.adobe.cq.wcm.core.components.models.Image getCertificatesBtnFirstIcon();

    @JsonProperty("certificatesBtnSecondIcon")
    com.adobe.cq.wcm.core.components.models.Image getCertificatesBtnSecondIcon();

    @JsonProperty("certificatesErrorText")
    String getCertificatesErrorText();

    @JsonProperty("certificatesLimitErrorText")
    String getCertificatesLimitErrorText();

    @JsonProperty("certificatesErrorColor")
    String getCertificatesErrorColor();

}
