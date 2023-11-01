import { useEffect, useState } from "react";

const Notification = (props) => {
  const [notification, setNotification] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setNotification(e.target.text.value);
  };
  useEffect(() => {
    setTimeout(() => {
      setNotification("");
    }, 5000);
  }, [notification]);

  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <form onSubmit={submitHandler}>
        <input type="text" name="text" />
        <button type="Submit">Submit</button>
      </form>
      <div>{notification}</div>
    </>
  );
};
export default Notification;
