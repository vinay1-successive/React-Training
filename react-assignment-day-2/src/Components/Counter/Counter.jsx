import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styleAll } from "../Question";
const Counter = (props) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div style={styleAll.div}>
        <button style={styleAll.button} onClick={() => setValue(value - 1)}>
          -
        </button>
        <p s style={styleAll.label}>
          {value}
        </p>
        <button style={styleAll.button} onClick={() => setValue(value + 1)}>
          +
        </button>
      </div>
      <Outlet />
    </>
  );
};
export default Counter;
