import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";
const RandomNumberGenerator = (props) => {
  const number = () => Math.floor(Math.random() * 100 + 1);

  const [randomNumber, setRandomNumber] = useState(number);

  return (
    <>
      <div style={props.styles.Ques}>{props.value}</div>
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
