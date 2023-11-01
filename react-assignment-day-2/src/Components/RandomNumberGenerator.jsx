import { useState } from "react";

const RandomNumberGenerator = (props) => {
  const number = () => Math.floor(Math.random() * 100 + 1);

  const [randomNumber, setRandomNumber] = useState(number);
  const styles = {
    div: {
      border: "2px solid",
      padding: "20px",
    },
  };
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div style={styles.div}>
        <p>{randomNumber}</p>
        <button onClick={() => setRandomNumber(number)}>Generate</button>
      </div>
    </>
  );
};
export default RandomNumberGenerator;
