import { useState } from "react";
import InputField from "../../../components/InputField";

const Question8 = (props) => {
  const [input, setInput] = useState({ c: 0, f: 0 });
  const handleChangeC = (e) => {
    const x = e.target.value;
    setInput({ c: x, f: (x * 9) / 5 + 32 });
  };
  const handleChangeF = (e) => {
    const x = e.target.value;
    setInput({ c: ((x - 32) * 5) / 9, f: x });
  };
  return (
    <>
      <div>
        <div style={props.style.div}>
          <div style={props.style.Ques}>{props.value}</div>
          <div style={props.style.form}>
            C:
            <InputField
              props={{
                ...props,
                type: "number",
                fun: handleChangeC,
                value: input.c,
              }}
            />
            F:
            <InputField
              props={{
                ...props,
                type: "number",
                fun: handleChangeF,
                value: input.f,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Question8;
