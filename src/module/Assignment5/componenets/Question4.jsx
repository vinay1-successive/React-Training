import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { styleAll } from "../../../Helper/Styles";
import { Button } from "@mui/material";
import { columns } from "../helper/userData";

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
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pemailSize: 5,
              },
            },
          }}
          pemailSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};
export default Question4;
