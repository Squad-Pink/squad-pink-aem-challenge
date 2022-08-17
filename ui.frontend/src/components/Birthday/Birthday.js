import React, { useState} from "react";
import Select from '../Micro/Select/Select';
import { Result, BirthdayContainer, LabelContainer, DateContainer } from './Birthday.styled';
import Label from '../Micro/Label/MicroLabel';
import ErrorMessage from "../Micro/ErrorMessage/ErrorMessage";

const Birthday = ({ 
  labelColor, 
  labelTitle, 
  labelMonth, 
  labelDay, 
  borderColor, 
  labelYear, 
  labelAge, 
  register, 
  errors,     
  errorText,
  colorError
  }) => {

    const [dayOption, setDayOption] = useState(0);
    const [monthOption, setMonthOption] = useState(0);
    const [yearOption, setYearOption] = useState(0);
    const [age, setAge] = useState(''); 
  
      function changeDay(e) {
      setDayOption(e.target.value);
    }
  
    function changeMonth(e) {
      setMonthOption(e.target.value);
    }
  
    function changeYear(e) {
      setYearOption(e.target.value)        
    }  
      
    const calculateAge = async() =>{
      getAge()
      ;
    }
    
    function getAge() {
      var today = new Date();    
      var age = today.getFullYear() - yearOption;
      var m = today.getMonth() - monthOption;
      if (m < 0 || (m === 0 && today.getDate() < dayOption)) {
        age--;     
      }
      setAge(age)
      localStorage.setItem("Birthday", dayOption + '/' + monthOption + '/' + yearOption);
      return age;
    } 
  
    console.log(dayOption)
    console.log(monthOption)
    console.log(yearOption)
    console.log(age)     
   
  return (
    <BirthdayContainer>
      <LabelContainer>
        <Label labelColor={labelColor} id="Birthday" label={labelTitle}/>
        <ErrorMessage errorText={errorText} colorError={colorError} errors={errors} id="Age"/>
      </LabelContainer>
      <DateContainer>
        <div>
          <Label labelColor={labelColor} id="inputs"label={labelDay}/>
          <Select id="Day" borderColor={borderColor} onInput={changeDay} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs" label={labelMonth}/>
          <Select id="Month" borderColor={borderColor} onInput={changeMonth}/>
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs" label={labelYear}/>
          <Select id="Year" borderColor={borderColor} onInput={changeYear} onBlur={calculateAge} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs" label={labelAge} />
          <Result borderColor={borderColor} id="Age" placeholder="Age" type="text" value={age} {...register("Age")} />
        </div>        
      </DateContainer>
    </BirthdayContainer>
  )
}

export default Birthday;






