import React from "react";
import { SelectStyled, OptionStyled } from "./Select.styled";

export const Select = ({ id, setDay, setMonth, setYear, borderColor, optionColor  }) => {
  switch (id) {
    case "Day":
      return (
        <SelectDay 
          borderColor={borderColor} 
          optionColor={optionColor}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      );
    case "Month":
      return (
        <SelectMonth 
          borderColor={borderColor} 
          optionColor={optionColor}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
      );
    case "Year":
      return (
        <SelectYear
          borderColor={borderColor} 
          optionColor={optionColor}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      );
  }
};

export default Select;

const SelectYear = ({ onChange }) => {
  let year = {
    years: [],
  };
  for (var i = 1900; i < 2022; i++) {
    year.years[i] = i + 1;
  }

  let optionYear = year.years.map((yearNumber) => (
    <OptionStyled key={yearNumber}>{yearNumber} </OptionStyled>
  ));

  return (
    <>   
        <SelectStyled onChange={onChange}>{optionYear}</SelectStyled>
    </>
  );
};

const SelectMonth = ({ onChange }) => {
  let month = {
    months: [],
  };
  for (var i = 0; i < 12; i++) {
    if (i <= 8) {
      month.months[i] = "0" + (i + 1);
    } else {
      month.months[i] = i + 1;
    }
  }

  let optionMonth = month.months.map((monthNumber) => (
    <OptionStyled key={monthNumber}>{monthNumber}</OptionStyled>
  ));
  return (
    <>      
        <SelectStyled onChange={onChange}>{optionMonth}</SelectStyled>     
    </>
  );
};

const SelectDay = ({ onChange }) => {
  let day = {
    days: [],
  };
  for (var i = 0; i < 31; i++) {
    if (i <= 8) {
      day.days[i] = "0" + (i + 1);
    } else {
      day.days[i] = i + 1;
    }
  }

  let optionDate = day.days.map((date) => (
    <OptionStyled key={date}>{date}</OptionStyled>
  ));

  return (
    <>    
        <SelectStyled onChange={onChange}>{optionDate}</SelectStyled>
    </>
  );
};