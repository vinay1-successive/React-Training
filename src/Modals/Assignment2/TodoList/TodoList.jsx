import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";

const TodoList = (props) => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const handleAddTodo = () => {
    const newTask = {
      id: todo.length,
      status: false,
      todo: task,
    };
    if (task) {
      setTodo([...todo, newTask]);
    }
    setTask("");
  };
  const handleDeleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div style={props.styles.Ques}>{props.value}</div>
      <div style={styleAll.div1}>
        <h1>TodoList</h1>
        <div style={styleAll.div}>
          <input
            style={styleAll.input}
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button style={styleAll.button} onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <ul>
          {todo.map((item) => (
            <li style={styleAll.label} key={item.id}>
              {item.todo} <input style={styleAll.label} type="checkbox" />
              <button
                style={styleAll.button}
                onClick={() => handleDeleteTodo(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
