import { useState } from "react";
import * as React from "react";
import { styleAll } from "../../../helper/Styles";
import { Button } from "@mui/material";
import { columns } from "../helper/userData";
import BoxPagination from "../../../components/BoxPagination";

const Question4 = (props) => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Invalid Response");
      }
      const data = await response.json();
      console.log(data);
      setdata(data.users);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div style={styleAll.Ques}>{props.value}</div>
      <Button onClick={getData}>Get Data</Button>
      <BoxPagination props={{ rows: data, columns }} />
    </div>
  );
};
export default Question4;
