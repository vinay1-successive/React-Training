import { Greetings } from "../helper/helper";
import QuestionData from "../../../Components/QuestionData";
const Question1 = () => {
  return (
    <>
      <h1>Question-1</h1>
      <QuestionData
        value={
          "1.Create a functional component named Greeting that displays a simple Hello, React! message on the screen. Import and render the Greeting component in the App component."
        }
      />
      <Greetings />
    </>
  );
};
export default Question1;
