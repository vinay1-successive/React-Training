import { useState } from "react";
import { styleAll } from "../../../helper/Styles";
import QuestionData from "../../../components/QuestionData";
import Question from "../../../mockData/Data6";
import SubmitButton from "../../../components/SubmitButton";
const Question3 = () => {
  const [value, setValue] = useState(0);
  const handledec = () => {
    setValue(value - 1);
  };
  const handleinc = () => {
    setValue(value + 1);
  };
  return (
    <>
      <QuestionData value={Question.Question3} />
      <div style={styleAll.div}>
        <SubmitButton props={{ ...styleAll, fun: handledec, bVal: "dec" }} />
        <p style={styleAll.label}> {value} </p>
        <SubmitButton props={{ ...styleAll, fun: handleinc, bVal: "inc" }} />
      </div>
    </>
  );
};

export default Question3;
