import { useState } from "react";
import InputField from "../../../components/InputField";

const Question3 = (props) => {
  const [name, setName] = useState();
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
        <div>
          <label style={props.style.label} htmlFor="name">
            Name:
          </label>
          <InputField
            props={{ ...props, value: name, fun: handleChange, type: "text" }}
          />
        </div>
        {name && name === "show" && <p>Hello EveryOne</p>}
      </div>
    </>
  );
};
export default Question3;
