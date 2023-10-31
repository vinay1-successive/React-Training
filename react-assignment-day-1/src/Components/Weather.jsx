import { useState } from "react";

const Weather = (props) => {
  const { value } = props;
  let text = "";
  if (typeof value !== "number") {
    text = "Wrong Input";
  } else if (value > 10 && value < 25) {
    text = "It is Normal Today!";
  } else if (value > 25) {
    text = "It is Sunny Today!";
  } else {
    text = "It is Cold Today!";
  }

  return <>{text}</>;
};
export default Weather;
