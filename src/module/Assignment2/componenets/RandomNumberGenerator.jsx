import { useState } from "react";
import { styleAll } from "../../../helper/Styles";
import QuestionData from "../../../components/QuestionData";
const RandomNumberGenerator = (props) => {
  const number = () => Math.floor(Math.random() * 100 + 1);

  const [randomNumber, setRandomNumber] = useState(number);

  return (
    <>
      <QuestionData value={props.value}/>
      <div style={styleAll.div}>
        <p style={styleAll.label}>{randomNumber}</p>
        <button style={styleAll.button} onClick={() => setRandomNumber(number)}>
          Generate
        </button>
      </div>
    </>
  );
};
export default RandomNumberGenerator;
