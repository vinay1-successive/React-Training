import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styleAll } from "../../../helper/Styles";
import QuestionData from "../../../components/QuestionData";
const Counter = (props) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <QuestionData value={props.value}/>
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
