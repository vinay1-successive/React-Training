import { useMemo, useState } from "react";
import { Students } from "./EmployeeData";
import { styleAll } from "../../../Helper/Styles";
const EmployeeSalary = (props) => {
  const [list] = useState(Students);
  const [salary, setSalary] = useState(0);
  const [total, setTotal] = useState(0);
  const handleTotal = () => {
    setTotal(
      list.reduce(
        (acc, item) => Number(acc) + Number(item.salary) + Number(salary),
        0
      )
    );
  };
  useMemo(() => {
    return list;
  }, [list]);
  return (
    <>
      <div style={props.styles.Ques}>{props.value}</div>
      <div style={styleAll.div}>
        <ul>
          {list.map((item, index) => {
            return (
              <li style={styleAll.input} key={index}>
                {item.name} Salary: {item.salary}
              </li>
            );
          })}
          <div>Total Amount: {total / list.length}</div>
        </ul>

        <div style={styleAll.form}>
          <input
            style={styleAll.input}
            type="number"
            onChange={(e) => setSalary(e.target.value)}
            name=""
            id=""
          />
          <button style={styleAll.button} onClick={handleTotal}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeSalary;
