import { useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(0);
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      border: "2px solid",
      padding: "20px",
      gap: "10px",
      width: "300px",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      border: "2px solid",
      padding: "20px",
    },
    button: { fontSize: "30px", height: "40px", width: "100px" },
  };
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div style={styles.div}>
        <button style={styles.button} onClick={() => setValue(value - 1)}>
          -
        </button>
        <p style={{ fontSize: "20px" }}>{value}</p>
        <button style={styles.button} onClick={() => setValue(value + 1)}>
          +
        </button>
      </div>
    </>
  );
};
export default Counter;
