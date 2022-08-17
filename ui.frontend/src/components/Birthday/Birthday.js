import React, { useState, useEffect } from "react";
import Select from '../Micro/Select/Select';
import { Result, BirthdayContainer, LabelContainer, DateContainer } from './Birthday.styled';
import Label from '../Micro/Label/MicroLabel';
import ErrorMessage from "../Micro/ErrorMessage/ErrorMessage";

const Birthday = ({ labelColor, labelTitle, labelMonth, labelDay, borderColor, labelYear, labelAge, register, errors }) => {
  const [dayOption, setDayOption] = useState(0);
  const [monthOption, setMonthOption] = useState(0);
  const [yearOption, setYearOption] = useState(0);
  const [age, setAge] = useState();
  
  function changeDay(e) {
    setDayOption(e.target.value);
  }

  function changeMonth(e) {
    setMonthOption(e.target.value);
  }

  function changeYear(e) {
    setYearOption(e.target.value)    
  }

  function calculaAge() {
    getAge()
  }
  function getAge() {
    var today = new Date();    
    var age = today.getFullYear() - yearOption;
    var m = today.getMonth() - monthOption;
    if (m < 0 || (m === 0 && today.getDate() < dayOption)) {
      age--;     
    }
    setAge(age);
  } 

  return (
    <BirthdayContainer>
      <LabelContainer>
        <Label labelColor={labelColor} id="Birthday" label={labelTitle}/>
        <ErrorMessage errorText="TA ERRADO FIDAMAE" colorError={"red"} errors={errors} id="Age"/>
      </LabelContainer>
      <DateContainer>
        <div>
          <Label labelColor={labelColor} id="inputs"label={labelDay}/>
          <Select id="Day" borderColor={borderColor} onInput={changeDay} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs" label={labelMonth}/>
          <Select id="Month" borderColor={borderColor} onInput={changeMonth} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs" label={labelYear}/>
          <Select id="Year" borderColor={borderColor} onInput={changeYear} onBlur={calculaAge} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs" label={labelAge} />
          <Result borderColor={borderColor} id="Age" placeholder="Age" type="text" value={age} {...register("Age")} disabled/>
        </div>        
      </DateContainer>
    </BirthdayContainer>
  )
}

export default Birthday;






