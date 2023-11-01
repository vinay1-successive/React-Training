import Question from "./Question.js";
import Question1 from "./Question1/Question1.jsx";
import Question2 from "./Question2/Question2.jsx";
import Question3 from "./Question3/Question3.jsx";
import Question4 from "./Question4/Question4.jsx";
const Questions = () => {
  const Style = {
    div: {
      backgroundColor: "beige",
      border: "2px solid",
      padding: "10px",
    },
  };
  return (
    <>
      <div>
        <Question1 style={Style} value={Question.Question1} />
        <Question2 style={Style} value={Question.Question2} />
        <Question3 style={Style} value={Question.Question3} />
        <Question4
          style={Style}
          value={[Question.Question4, Question.Question5, Question.Question6]}
        />
      </div>
    </>
  );
};
export default Questions;
