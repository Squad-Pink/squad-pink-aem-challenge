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
  Age: yup.number().required(),
}).required();

const XxXxx = (props) => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

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
