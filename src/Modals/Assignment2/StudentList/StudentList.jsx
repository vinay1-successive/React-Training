import { useMemo, useState } from "react";
import { styleAll } from "../../../Helper/Styles";

const Students = [{ name: "Vinay" }, { name: "Karan" }];
const StudentList = (props) => {
  const [list, setList] = useState(Students);
  const [item, setItem] = useState("");
  const handleStudent = (item) => {
    const newItem = {
      name: item,
    };
    if (item) {
      setList([...list, newItem]);
    }
    setItem("");
  };
  useMemo(() => {
    return list;
  }, [list]);
  return (
    <>
      <div style={props.styles.Ques}>{props.value}</div>
      <div style={styleAll.div}>
        <ul style={styleAll.div1}>
          {list.map((item, index) => {
            return (
              <li style={styleAll.input} key={index}>
                {item.name}
              </li>
            );
          })}
        </ul>
        <div style={styleAll.form}>
          <input
            style={styleAll.input}
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
          />
          <button style={styleAll.button} onClick={() => handleStudent(item)}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentList;
