import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import QuestionData from "../../../Components/QuestionData";
import Question from "../../../MockData/Data6";
const Question3 = (props) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <QuestionData value={Question.Question3} />
      <div style={styleAll.div}>
        <button
          type="button"
          style={styleAll.button}
          onClick={() => setValue(value - 1)}
        >
          dec
        </button>
        <p style={styleAll.label}> {value} </p>
        <button
          type="button"
          style={styleAll.button}
          onClick={() => setValue(value + 1)}
        >
          inc
        </button>
      </div>
    </>
  );
};

export default Question3;
