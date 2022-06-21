import React, { Component }  from "react";
import ReactHorizontalDatePicker from './ReactHorizontalDatePicker'
import './ReactHorizontalDatePicker.css'

const App = () => {
  const onSelectedDay = (d) => {
    console.log(d);
  };

  return (
    <ReactHorizontalDatePicker
      selectedDay={onSelectedDay}
      enableDays={180}
    />
  );
};

export default App;
