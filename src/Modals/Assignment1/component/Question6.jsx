import QuestionData from "../../../Components/QuestionData";
import { Button } from "../helper/helper";

const Question6 = () => {
  return (
    <>
      <h1>Question-6</h1>
      <QuestionData
        value={
          "6.Create a functional component named Button that accepts props for text and color. Style the button using inline styles or CSS classes based on the color prop. Import and render the Button component in the App component with different text and color props."
        }
      />
      <div
        style={{
          border: "2px solid",
          padding: "30px",
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button text="Button-1" color="green" />
        <Button text="Button-2" color="blue" />
        <Button text="Button-3" color="yellow" />
        <Button text="Button-4" color="purple" />
        <Button text="Button-5" color="black" />
      </div>
    </>
  );
};
export default Question6;
