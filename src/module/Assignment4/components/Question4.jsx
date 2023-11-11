import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";
import { UserValidate } from "../helper/helper";

const Question4 = (props) => {
  const { data, handleData, handleSubmit } = UserValidate();
  return (
    <>
      <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
        <form style={props.style.form} onSubmit={handleSubmit}>
          <div>
            <label style={props.style.label} htmlFor="name">
              Name:{" "}
            </label>
            <InputField
              props={{
                ...props,
                type: "text",
                name: "name",
                fun: handleData,
                value: data.name,
              }}
            />
          </div>
          <div>
            <label style={props.style.label} htmlFor="password1">
              Enter password:{" "}
            </label>
            <InputField
              props={{
                ...props,
                type: "password",
                name: "password1",
                fun: handleData,
                value: data.password1,
              }}
            />
          </div>
          <div>
            <label style={props.style.label} htmlFor="password2">
              confirm password:{" "}
            </label>
            <InputField
              props={{
                ...props,
                type: "password",
                name: "password2",
                fun: handleData,
                value: data.password2,
              }}
            />
          </div>
          <SubmitButton props={{ ...props, type: "submit" }} />
        </form>
      </div>
    </>
  );
};

export default Question4;
