import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";
const Question3 = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div style={styleAll.div}>
        <button type="button" style={styleAll.button} onClick={() => setValue(value - 1)}>dec</button>
        <p style={styleAll.label}> {value} </p>
        <button type="button" style={styleAll.button} onClick={() => setValue(value + 1)}>inc</button>
      </div>
    </>
  );
};

export default Question3