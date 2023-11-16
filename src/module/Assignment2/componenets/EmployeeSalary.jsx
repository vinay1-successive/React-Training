import { useMemo, useState } from "react";
import { styleAll } from "../../../helper/Styles";
import { Students } from "../helper/helper";
import QuestionData from "../../../components/QuestionData";
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
      <QuestionData value={props.value}/>
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
