import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Success from "../Success/Success"

const XxXxxEditConfig = {
  emptyLabel: "Digite aqui o texto por favor",

  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const XxXxx = (props) => {
  return (
    <div>
      <p>My Text Component: {props.text}</p>
      <p>My Checkbox is: {props.checkbox ? "checked" : "unchecked"}</p>
      <Success />
    </div>
  );
};

export default MapTo("reactapp/components/xx-xxx")(XxXxx, XxXxxEditConfig);
