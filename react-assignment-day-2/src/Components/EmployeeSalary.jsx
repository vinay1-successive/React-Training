import { useMemo, useState } from "react";

const Students = [
  { name: "Vinay", salary: 20000 },
  { name: "Karan", salary: 30000 },
];
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
      <div style={props.styles.div}>{props.value}</div>
      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                {item.name} Salary: {item.salary}
              </li>
            );
          })}
        </ul>
        <div>Total Amount: {total / list.length}</div>
        <input
          type="number"
          onChange={(e) => setSalary(e.target.value)}
          name=""
          id=""
        />
        <button onClick={handleTotal}>Update</button>
      </div>
    </>
  );
};

export default EmployeeSalary;
