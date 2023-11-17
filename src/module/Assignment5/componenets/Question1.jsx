import { useState } from "react";
import { styleAll } from "../../../helper/Styles";
import { Button } from "@mui/base";

const Question1 = (props) => {
  const [data, setdata] = useState();
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setdata(data);
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
export default Question1;
