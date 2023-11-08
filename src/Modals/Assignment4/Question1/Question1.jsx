import { useState } from "react";

const Question1 = (props) => {
  const [data, setData] = useState({ name: "", input: false });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name !== "") {
      setData({ ...data, input: true });
    }
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
              value={data.name}
              type="text"
              name="name"
              onChange={handleData}
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
        {data.input && <p>Your name is: {data.name}</p>}
      </div>
    </>
  );
};

export default Question1;
