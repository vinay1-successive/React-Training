import { useState } from "react";

const Question5 = (props) => {
  const [state, setState] = useState("football");
  const [input, setInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(true);
  };

  return (
    <>
      <div style={props.style.div}>
      <div style={props.style.Ques}>{props.value}</div>
      <div>
        <form style={props.style.form} onSubmit={handleSubmit}>
          <select style={props.style.label}
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setInput(false);
            }}
          >
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="hockey">Hockey</option>
          </select>
          <button style={props.style.button}>submit</button>
        </form>
      </div>
      {input && <p>Game: {state}</p>}
      </div>
    </>
  );
};
export default Question5;
