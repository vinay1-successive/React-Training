import { useState } from "react";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";

const Question6 = (props) => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTask = {
      id: task.length,
      todo: task,
    };
    if (newTask.todo) {
      setTodo([...todo, newTask]);
    }
    setTask("");
  };
  return (
    <>
      <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
        <form onSubmit={handleAddTodo} style={props.style.form}>
          <InputField
            props={{ ...props, type: "text", fun: handleChange, value: task }}
          />
          <SubmitButton props={{ ...props}} />
        </form>
        <ul>
          {todo?.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Question6;
