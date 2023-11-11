import QuestionData from "../../../components/QuestionData";
import { TaskList } from "../helper/helper";

const Question5 = () => {
  const tasks = ["Go To Gym", "Go To Shopping", "Go for Run", "Go To Eat"];

  return (
    <>
      <h1>Question-5</h1>
      <QuestionData
        value={
          "5.Create a functional component named TaskList that accepts an array of task names as a prop. Use the map function to render each task name as a list item. Import and render the TaskList component in the App component with an array of tasks."
        }
      />
      <div
        style={{
          border: "2px solid",
          padding: "20px",
          justifyContent: "space-evenly",
        }}
      >
        {tasks.map((task, index) => {
          return <TaskList key={index} value={task} />;
        })}
      </div>
    </>
  );
};
export default Question5;
