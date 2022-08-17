import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import Birthday from "../Birthday/Birthday";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const XxXxxEditConfig = {
  emptyLabel: "Digite aqui o texto por favor",

  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const schema = yup.object({
  Age: yup.string().required(),  
}).required();

const saveLocal = (value) => {
  let localValues = Object.entries(value)
  for(let i = 0; i < localValues.length; i++) {
    localStorage.setItem(localValues[i][0],localValues[i][1])
  }
}

const XxXxx = (props) => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = data => saveLocal(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>     
      <Birthday 
      register={register}
      errors={errors}
      labelColor={"black"}
      labelTitle="Birthday"
      labelMonth="Month"
      labelDay="Day"
      borderColor={"Black"}
      labelYear="Year"
      labelAge="Age"/>
      <button type="submit">ENVIA DIABO</button>
    </form>
  );
};

export default MapTo("reactapp/components/xx-xxx")(XxXxx, XxXxxEditConfig);
