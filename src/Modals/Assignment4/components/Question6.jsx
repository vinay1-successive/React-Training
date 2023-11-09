import { useState } from "react";

const Question6 = (props) => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
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
          <input
            style={props.style.input}
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button style={props.style.button}>
            Add
          </button>
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
