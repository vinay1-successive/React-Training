import QuestionData from "../../../Components/QuestionData";
import { styleAll } from "../../../Helper/Styles";
import Question from "../../../MockData/Data6";

const Question5 = (props) => {
  const { name, email, phone } = props.value;
  return (
    <>
      <QuestionData value={Question.Question5} />
      <div style={styleAll.div1}>
        <p>{name}</p>
        <p>{email}</p>
        <p> {phone}</p>
      </div>
    </>
  );
};

export default Question5;
