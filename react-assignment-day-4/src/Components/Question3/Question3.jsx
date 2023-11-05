import { useState } from "react";

const Question3 = (props) => {
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
  };
  return (
    <>
    <div style={props.style.div}>
      <div style={props.style.Ques}>{props.value}</div>
    <div>
        <form style={props.style.form} onSubmit={handleSubmit}>
          <label style={props.style.label} htmlFor="name">Name:</label>
          <input
          style={props.style.input}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.name.value)}
          />
          <button style={props.style.button}>Submit</button>
        </form>
      </div>
      {name && name === "show" && <p>Hello EveryOne</p>}
    </div>
    </>
  );
};
export default Question3;
