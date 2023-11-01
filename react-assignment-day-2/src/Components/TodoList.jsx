import { useState } from "react";

const TodoList = (props) => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const handleAddTodo = () => {
    const newTask = {
      id: todo.length,
      status: false,
      todo: task,
    };
    setTodo([...todo, newTask]);
    setTask("");
  };
  const handleDeleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div>
        <h1>TodoList</h1>
        <div>
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              {item.todo} <input type="checkbox" />
              <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
