import { useEffect, useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import QuestionData from "../../../Components/QuestionData";

const Notification = (props) => {
  const [notification, setNotification] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setNotification(e.target.text.value);
  };
  useEffect(() => {
    const id = setTimeout(() => {
      setNotification("");
    }, 5000);
    return () => clearInterval(id);
  }, [notification]);

  return (
    <>
      <QuestionData value={props.value}/>
      <div style={styleAll.div}>
        <form style={styleAll.form} onSubmit={submitHandler}>
          <input style={styleAll.input} type="text" name="text" />
          <button style={styleAll.button} type="Submit">
            Submit
          </button>
        </form>
      </div>
      <div style={styleAll.div}>{notification}</div>
    </>
  );
};
export default Notification;
