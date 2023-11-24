import React from "react";
import QuestionData from "../../../components/QuestionData";
import { styleAll } from "../../../helper/Styles";
import Question from "../../../mockData/Data6";

const Question5 = (props) => {
  const { name, email, phone } = props.data || {};
  return (
    <div>
      <QuestionData value={Question.Question5} />
      <div style={styleAll.div1}>
        <p data-testid="name">{name}</p>
        <p data-testid="email">{email}</p>
        <p data-testid="phone"> {phone}</p>
      </div>
    </div>
  );
};

export default Question5;
