import { useValidate } from "../helper/helper";
import { styleAll } from "../../../helper/Styles";
import Form from "../../../components/Form";

const Question10 = (props) => {
  const { data, error, handleInput, handleSubmit } = useValidate();
  const handleForm = (e) => {
    e.preventDefault();
    const check = handleSubmit();
    if (check) {
      alert(data.name + " " + data.email);
    }
  };
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <Form props={{data,error,handleInput,handleForm}}/>
      </div>
    </>
  );
};

export default Question10;
