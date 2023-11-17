import { useState } from "react";
const Button = (props) => {
  const { text, color } = props;
  return <button style={{ color: color, fontSize: "20px" }}>{text}</button>;
};

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{ fontSize: "30px", width: "100px" }}
        onClick={() => setValue(value - 1)}
      >
        sub
      </button>
      <p style={{ fontSize: "60px", height: "40px" }}>{value}</p>
      <button
        style={{ fontSize: "30px", width: "100px" }}
        onClick={() => setValue(value + 1)}
      >
        add
      </button>
    </div>
  );
};
const Greetings = () => {
  return (
    <div
      style={{
        border: "2px solid",
        padding: "20px",
        justifyContent: "space-evenly",
      }}
    >
      "Hello React!"
    </div>
  );
};

const TaskList = (props) => {
  return <li>{props.value}</li>;
};
const UserCard = (props) => {
  const { userName, email, avatarUrl } = props;
  return (
    <div
      style={{
        border: "2px solid",
        padding: "20px",
        justifyContent: "space-evenly",
      }}
    >
      <p>
        <img src={avatarUrl} alt="" width="200px" height="200px" />{" "}
      </p>
      <p>UserName: {userName}</p>
      <p>email: {email}</p>
    </div>
  );
};

const Weather = (props) => {
  const { value } = props;
  let text = "";
  if (typeof value !== "number") {
    text = "Wrong Input";
  } else if (value > 10 && value < 25) {
    text = "It is Normal Today!";
  } else if (value > 25) {
    text = "It is Sunny Today!";
  } else {
    text = "It is Cold Today!";
  }

  return <>{text}</>;
};

const usersObejct = [
  {
    userName: "Vinay",
    email: "vinay@gmail.com",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    userName: "Karan",
    email: "Karna@gmail.com",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    userName: "Anish",
    email: "Anish@gmail.com",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
  },
];

export { Button, Greetings, UserCard, TaskList, Counter, Weather ,usersObejct};
