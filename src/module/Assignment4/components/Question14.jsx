import { useValidate14 } from "../helper/helper";
import { styleAll } from "../../../helper/Styles";
import Form from "../../../components/Form";

const Question14 = (props) => {
  const { data, error, handleInput, handleSubmit, summ } = useValidate14();
  console.log(summ);
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
        <Form props={{ data, error, handleInput, handleForm }} />
        {summ.map((item) => {
          return <li>{item}</li>;
        })}
      </div>
    </>
  );
};

export default Question14;
