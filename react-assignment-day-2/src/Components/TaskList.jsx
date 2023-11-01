import { useCallback, useState } from "react";

const arr = [
  { task: "Eat", status: false },
  { task: "Sleep", status: false },
  { task: "Walk", status: false },
  { task: "Fight", status: false },
];
const TaskList = (props) => {
  const [task, setTask] = useState(arr);
  const handleTask = useCallback(
    (text) => {
      setTask(
        task.map((item) => {
          if (item.task === text) {
            item.status = !item.status;
          }
          return item;
        })
      );
    },
    [task]
  );
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <Task task={task} handleTask={handleTask} />
    </>
  );
};

const Task = ({ task, handleTask }) => {
  return (
    <>
      {task.map((item, index) => {
        return (
          <li key={index}>
            {item.task}{" "}
            <button onClick={() => handleTask(item.task)}>
              {item.status ? "Complete" : "Incomplete"}
            </button>
            {item.status ? "This Task is Completed!!" : "Incomplete Task"}
          </li>
        );
      })}
    </>
  );
};
export default TaskList;
