import QuestionData from "../../../components/QuestionData";
import { styleAll } from "../../../helper/Styles";
import Question from "../../../mockData/Data6";

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
