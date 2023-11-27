import React from "react";
import { styleAll } from "../helper/Styles";
const QuestionData = (props) => {
  return (<div style={styleAll.Ques}>{props.value}</div>)
};
export default QuestionData;
