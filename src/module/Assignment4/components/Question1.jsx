import { useState } from "react";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";

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
            <InputField
              props={{
                ...props,
                value: data.name,
                fun: handleData,
                type: "text",
                name: "name",
              }}
            />
          </div>
          <SubmitButton
            props={{ ...props, fun: handleSubmit, type: "submit" }}
          />
        </form>
        {data.input && <p>Your name is: {data.name}</p>}
      </div>
    </>
  );
};

export default Question1;
