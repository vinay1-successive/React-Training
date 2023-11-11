import { useState } from "react";
import SubmitButton from "../../../components/SubmitButton";

const Question5 = (props) => {
  const [data, setData] = useState({ name: "", input: false });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, input: false });
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
        <div>
          <form style={props.style.form} onSubmit={handleSubmit}>
            <select
              style={props.style.label}
              value={data.name}
              name="name"
              onChange={handleData}
            >
              <option value="football">Football</option>
              <option value="cricket">Cricket</option>
              <option value="hockey">Hockey</option>
            </select>
            <SubmitButton props={{ ...props}} />
          </form>
        </div>
        {data.input && <p>Game: {data.name}</p>}
      </div>
    </>
  );
};
export default Question5;
