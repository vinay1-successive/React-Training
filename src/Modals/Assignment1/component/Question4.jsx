import QuestionData from "../../../Components/QuestionData";
import { Counter } from "../helper/helper";

const Question4 = () => {
  return (
    <>
      <h1>Question-4</h1>
      <QuestionData
        value={
          "4.Create a functional component named Counter that displays a count and two buttons: Increment and Decrement. Implement event handlers for the Increment and Decrement buttons to increase and decrease the count. Display the updated count on the screen."
        }
      />
      <div style={{ border: "2px solid", padding: "20px" }}>
        <Counter />
      </div>
    </>
  );
};

export default Question4;
