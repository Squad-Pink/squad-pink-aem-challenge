import React, { useState, useEffect } from "react";
import Select from '../Micro/Select/Select';
import {Result, BirthdayContainer} from './Birthday.styled';

const Birthday = () => {
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState(0);    
    const [age, setAge] = useState(0);
    
    useEffect(() => {
        if (year != "") {
          changeAge(year);
        }
      }, [year]);
      useEffect(() => {
        if (year != "") {
          changeAge(year);
        }
      }, [day]);
      useEffect(() => {
        if (year != "") {
          changeAge(year);
        }
      }, [month]);
      const changeAge = (currentYear) => {
        setAge(2022 - currentYear);
        console.log(age);
        ;
      };

    return (
        <BirthdayContainer>
            <Select id="Day" borderColor={"black"} optionColor={"black"} setDay={setDay}/>
            <Select id="Month" borderColor={"black"} optionColor={"grey"} setMonth={setMonth}/>
            <Select id="Year" borderColor={"red"} optionColor={"grey"} setYear={setYear}/>       
            <Result borderColor={"black"} id="Age" placeholder="Age" type="text" value={age} disabled/>         
        </BirthdayContainer>
    )
}

export default Birthday;






