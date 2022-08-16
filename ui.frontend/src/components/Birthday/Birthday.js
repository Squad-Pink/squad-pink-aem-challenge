import React, { useState, useEffect } from "react";
import Select from '../Micro/Select/Select';
import { Result, BirthdayContainer, LabelContainer, DateContainer } from './Birthday.styled';
import Label from '../Micro/Label/MicroLabel';

const Birthday = ({labelColor, labelTitle, labelMonth, labelDay, borderColor, labelYear}) => {
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
      <LabelContainer>
        <Label labelColor={labelColor} id="Birthday">{labelTitle}</Label>
      </LabelContainer>
      <DateContainer>
        <div>
          <Label labelColor={labelColor} id="inputs">{labelDay}</Label>
          <Select id="Day" borderColor={borderColor} setDay={setDay} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs">{labelMonth}</Label>
          <Select id="Month" borderColor={borderColor} setMonth={setMonth} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs">{labelYear}</Label>
          <Select id="Year" borderColor={borderColor} setYear={setYear} />
        </div>
        <div>
          <Label labelColor={labelColor} id="inputs" label="Age" />
          <Result borderColor={borderColor} id="Age" placeholder="Age" type="text" value={age} disabled />
        </div>
      </DateContainer>
    </BirthdayContainer>
  )
}

export default Birthday;






