import { styleAll } from "../../../Helper/Styles";
import { Button } from "@mui/base";
import axios from "axios";
import { useState } from "react";
const Question7 = (props) => {
  const [data, setData] = useState({ moive: "", content: "" });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const getData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { title: data.moive, content: data.content },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <form style={styleAll.form1}>
          Moive: <input style={styleAll.input} type="text" name="moive" onChange={handleInput} />
          Content: <input style={styleAll.input}  type="text" name="content" onChange={handleInput} />
        </form>
        <Button onClick={getData}>Post Data</Button>
        <div>
          {data.title}
          {data.content}
        </div>
      </div>
    </>
  );
};
export default Question7;
