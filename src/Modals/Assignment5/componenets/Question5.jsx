import { useState } from "react";
import { Button } from "@mui/base";
import axios from "axios";
import { styleAll } from "../../../Helper/Styles";
const Question5 = (props) => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    setdata(response.data);
  };
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <Button onClick={getData}>Get Data</Button>
        {data?.map((item, index) => {
          return (
            <div key={index} style={styleAll.div1}>
              <p>Name: {item.name}</p>
              <p>Username: {item.username}</p>
              <p>Phone: {item.phone}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Question5;
