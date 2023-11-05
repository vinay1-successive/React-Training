import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styleAll } from "../Data";
import { useState } from "react";
import { Button } from "@mui/base";
import { useEffect } from "react";

const Question12 = (props) => {
  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt1", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich1", 237, 9.0, 37, 4.3),
    createData("Eclair1", 262, 16.0, 24, 6.0),
    createData("Cupcake1", 305, 3.7, 67, 4.3),
    createData("Gingerbread1", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt2", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich2", 237, 9.0, 37, 4.3),
    createData("Eclair2", 262, 16.0, 24, 6.0),
    createData("Cupcake2", 305, 3.7, 67, 4.3),
    createData("Gingerbread2", 356, 16.0, 49, 3.9),
  ];

  const [data, setData] = useState(rows);
  const [limit, setLimit] = useState(5);

  const handleSort = () => {
    setData(
      rows.slice(0, limit).sort((a, b) => {
        if (a.calories > b.calories) {
          return 1;
        }
        if (b.calories > a.calories) {
          return -1;
        }
        return 0;
      })
    );
  };

  useEffect(() => {
    setData(rows.slice(0, limit));
  }, [limit]);
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <div>
          Sort By Calaries:
          <Button onClick={handleSort}>Sort</Button>
        </div>
        <div>
          Number of Items:
          <select onChange={(e) => setLimit(e.target.value)} name="Items">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default Question12;