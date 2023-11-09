import { styleAll } from "../Helper/Styles";
const QuestionData = (props) => {
  return (
    <>
      <div style={styleAll.Ques}>{props.value}</div>
    </>
  );
};
export default QuestionData;
