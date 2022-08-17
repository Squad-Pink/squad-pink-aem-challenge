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
import com.reactapp.core.models.FormBasic;
import com.reactapp.core.models.formBasicModel;
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
    FormBasic.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/form-basic")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FormBasicImpl
    implements FormBasic
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<formBasicModel> formBasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayLabelTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayLabelDay;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayLabelMonth;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayLabelYear;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayLabelAge;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayLabelColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayErrorText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayErrorColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayBorderColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String checkboxLabelText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String checkboxLabelColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String checkboxErrorText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String checkboxColorError;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String checkboxBorderColor;
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
    public List<formBasicModel> getFormBasic() {
        return formBasic != null ? Collections.unmodifiableList(formBasic) : null;
    }

    @Override
    @JsonProperty("birthdayLabelTitle")
    public String getBirthdayLabelTitle() {
        return birthdayLabelTitle;
    }

    @Override
    @JsonProperty("birthdayLabelDay")
    public String getBirthdayLabelDay() {
        return birthdayLabelDay;
    }

    @Override
    @JsonProperty("birthdayLabelMonth")
    public String getBirthdayLabelMonth() {
        return birthdayLabelMonth;
    }

    @Override
    @JsonProperty("birthdayLabelYear")
    public String getBirthdayLabelYear() {
        return birthdayLabelYear;
    }

    @Override
    @JsonProperty("birthdayLabelAge")
    public String getBirthdayLabelAge() {
        return birthdayLabelAge;
    }

    @Override
    @JsonProperty("birthdayLabelColor")
    public String getBirthdayLabelColor() {
        return birthdayLabelColor;
    }

    @Override
    @JsonProperty("birthdayErrorText")
    public String getBirthdayErrorText() {
        return birthdayErrorText;
    }

    @Override
    @JsonProperty("birthdayErrorColor")
    public String getBirthdayErrorColor() {
        return birthdayErrorColor;
    }

    @Override
    @JsonProperty("birthdayBorderColor")
    public String getBirthdayBorderColor() {
        return birthdayBorderColor;
    }

    @Override
    @JsonProperty("checkboxLabelText")
    public String getCheckboxLabelText() {
        return checkboxLabelText;
    }

    @Override
    @JsonProperty("checkboxLabelColor")
    public String getCheckboxLabelColor() {
        return checkboxLabelColor;
    }

    @Override
    @JsonProperty("checkboxErrorText")
    public String getCheckboxErrorText() {
        return checkboxErrorText;
    }

    @Override
    @JsonProperty("checkboxColorError")
    public String getCheckboxColorError() {
        return checkboxColorError;
    }

    @Override
    @JsonProperty("checkboxBorderColor")
    public String getCheckboxBorderColor() {
        return checkboxBorderColor;
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
