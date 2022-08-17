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

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code FormBasic} Sling Model used for the {@code reactapp/components/form-basic} component.
 * 
 */
@ConsumerType
public interface FormBasic
    extends ComponentExporter
{


    List<formBasicModel> getFormBasic();

    @JsonProperty("birthdayLabelTitle")
    String getBirthdayLabelTitle();

    @JsonProperty("birthdayLabelDay")
    String getBirthdayLabelDay();

    @JsonProperty("birthdayLabelMonth")
    String getBirthdayLabelMonth();

    @JsonProperty("birthdayLabelYear")
    String getBirthdayLabelYear();

    @JsonProperty("birthdayLabelAge")
    String getBirthdayLabelAge();

    @JsonProperty("birthdayLabelColor")
    String getBirthdayLabelColor();

    @JsonProperty("birthdayErrorText")
    String getBirthdayErrorText();

    @JsonProperty("birthdayErrorColor")
    String getBirthdayErrorColor();

    @JsonProperty("birthdayBorderColor")
    String getBirthdayBorderColor();

    @JsonProperty("checkboxLabelText")
    String getCheckboxLabelText();

    @JsonProperty("checkboxLabelColor")
    String getCheckboxLabelColor();

    @JsonProperty("checkboxErrorText")
    String getCheckboxErrorText();

    @JsonProperty("checkboxColorError")
    String getCheckboxColorError();

    @JsonProperty("checkboxBorderColor")
    String getCheckboxBorderColor();

    @JsonProperty("submitBtnTitle")
    String getSubmitBtnTitle();

    @JsonProperty("submitBtnColor")
    String getSubmitBtnColor();

    @JsonProperty("submitColorText")
    String getSubmitColorText();

    @JsonProperty("submitFirstIcon")
    com.adobe.cq.wcm.core.components.models.Image getSubmitFirstIcon();

    @JsonProperty("submitSecondIcon")
    com.adobe.cq.wcm.core.components.models.Image getSubmitSecondIcon();

}
