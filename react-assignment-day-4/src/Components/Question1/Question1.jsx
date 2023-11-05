import { useState } from "react";

const Question1 = (props) => {
  const [name, setName] = useState("");
  const [input, setInput] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(true);
  };
  return (
    <>
      <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
        <form style={props.style.form}>
          <div>
            <label style={props.style.label} htmlFor="name">
              Name :
            </label>
            <input
              style={props.style.input}
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            style={props.style.button}
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </form>
        {input && <p>Your name is: {name}</p>}
      </div>
    </>
  );
};

export default Question1;
