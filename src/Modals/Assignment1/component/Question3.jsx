import QuestionData from "../../../Components/QuestionData";
import { Weather } from "../helper/helper";

const Question3 = () => {
  const temprature = [23, 40, 3, 53, 2, 29, "abc"];
  return (
    <>
      <h1>Question-3</h1>
      <QuestionData
        value={
          "3.Create a functional component named Weather that accepts a prop called temperature (a number). Display a message like Its sunny today! if the temperature is above 25°C and Its cold today! if the temperature is below 10°C. Import and render the Weather component in the App component with different temperature values."
        }
      />
      <div>
        {temprature.map((num, index) => {
          return (
            <li>
              <Weather key={index} value={num} />
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Question3;
