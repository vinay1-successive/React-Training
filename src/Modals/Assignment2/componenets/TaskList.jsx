import { useCallback, useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import { arr } from "../helper/helper";
import QuestionData from "../../../Components/QuestionData";
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
      <QuestionData value={props.value}/>
      <div style={styleAll.div1}>
        <Task task={task} handleTask={handleTask} />
      </div>
    </>
  );
};

const Task = ({ task, handleTask }) => {
  return (
    <>
      <ul>
        {task.map((item, index) => {
          return (
            <li
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "400px",
              }}
              key={index}
            >
              <p style={styleAll.label}> {item.task}</p>
              <button
                style={styleAll.label}
                onClick={() => handleTask(item.task)}
              >
                {item.status ? "Complete" : "Incomplete"}
              </button>
              <p style={styleAll.label}>
                {item.status ? "This Task is Completed!!" : "Incomplete Task"}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TaskList;
