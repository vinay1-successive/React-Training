import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import { Button } from "@mui/base";
import axios from "axios";
const Question6 = (props) => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.status) {
        throw new Error("Invalid Response");
      }
      console.log(response);
      setdata(response.data);
    } catch (error) {
      alert(error);
    }
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
export default Question6;
