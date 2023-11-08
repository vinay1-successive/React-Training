import {useState } from "react";

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
            C: <input
              style={props.style.input}
              type="number"
              value={input.c}
              onChange={handleChangeC}
            />
            F: <input
              style={props.style.input}
              type="number"
              value={input.f}
              onChange={handleChangeF}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Question8;
