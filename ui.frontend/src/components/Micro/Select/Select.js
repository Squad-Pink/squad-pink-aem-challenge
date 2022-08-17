import React from "react";
import { SelectStyled, OptionStyled } from "./Select.styled";

export const Select = ({ id, borderColor, optionColor, onInput, onBlur  }) => {
  switch (id) {
    case "Day":
      return (
        <SelectDay 
          borderColor={borderColor} 
          optionColor={optionColor}
          onInput={onInput}          
        />
      );
    case "Month":
      return (
        <SelectMonth 
          borderColor={borderColor} 
          optionColor={optionColor}          
          onInput={onInput}
        />
      );
    case "Year":
      return (
        <SelectYear
          borderColor={borderColor} 
          optionColor={optionColor}
          onBlur={onBlur}   
          onInput={onInput}      
        />
      );
  }
};

export default Select;

const SelectYear = ({ onInput, onBlur }) => {
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
        <SelectStyled onInput={onInput} onBlur={onBlur}>{optionYear}</SelectStyled>
    </>
  );
};

const SelectMonth = ({ onInput }) => {
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
        <SelectStyled onInput={onInput}>{optionMonth}</SelectStyled>     
    </>
  );
};

const SelectDay = ({ onInput }) => {
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
        <SelectStyled onInput={onInput}>{optionDate}</SelectStyled>
    </>
  );
};