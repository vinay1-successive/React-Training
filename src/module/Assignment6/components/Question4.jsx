import React, { useState } from "react";
import { styleAll } from "../../../helper/Styles";
import QuestionData from "../../../components/QuestionData";
import Question from "../../../mockData/Data6";
const Question4 = (props) => {
  const [data, setData] = useState({ name: "", password: "" });
  const [user, setUser] = useState(null);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name === "Vinay" && data.password === "12345") {
      setUser(true);
      console.log("Success");
    } else {
      console.log("Incorrect");
    }
  };

  return (
    <div>
      <QuestionData value={Question.Question4} />
      <form style={styleAll.form1} onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={data.name}
          name="name"
          type="text"
          required
          placeholder="name"
        />
        <input
          required
          onChange={handleInput}
          value={data.password}
          name="password"
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
      {user && (
        <p style={styleAll.div}>
          {data.name} {data.password}
        </p>
      )}
      {!user && "Incorrect"}
    </div>
  );
};

export default Question4;
