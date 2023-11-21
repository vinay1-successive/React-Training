import { useState } from "react";
import { styleAll } from "../../../helper/Styles";
import { Button } from "@mui/base";
import { CircularProgress } from "@mui/material";

const Question3 = (props) => {
  const [data, setdata] = useState([]);
  const [loading, isLoading] = useState();
  const getData = async () => {
    isLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Invalid Response");
      }
      const data = await response.json();
      console.log(data);
      setdata(data);
      isLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <Button onClick={getData}>Get Data</Button>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
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
        )}
      </div>
    </>
  );
};
export default Question3;
