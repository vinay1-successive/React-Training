import { useState } from "react";

const Question4 = (props) => {
  const [name, setName] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [state, setState] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: name,
      password1: password1,
      password2: password2,
    };
    console.log(newData);
  };
  //   const handleValidation = (e) => {};
  return (
    <>
      <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
        <form style={props.style.form} onSubmit={handleSubmit}>
          <div>
            <label style={props.style.label} htmlFor="name">
              Name:{" "}
            </label>
            <input
              style={props.style.input}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label style={props.style.label} htmlFor="password1">
              Enter password:{" "}
            </label>
            <input
              style={props.style.input}
              value={password1}
              onChange={(e) => {
                setPassword1(e.target.value);
                if (password2 === e.target.value) {
                  setState(false);
                } else {
                  setState(true);
                }
              }}
              type="password"
            />
          </div>
          <div>
            <label style={props.style.label} htmlFor="password2">
              confirm password:{" "}
            </label>
            <input
              style={props.style.input}
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
                if (password1 === e.target.value) {
                  setState(false);
                } else {
                  setState(true);
                }
              }}
              type="password"
            />
          </div>
          <button style={props.style.button} disabled={state} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Question4;
