import { useMemo, useState } from "react";

const Students = [{ name: "Vinay" }, { name: "Karan" }];
const StudentList = (props) => {
  const [list, setList] = useState(Students);
  const [item, setItem] = useState("");
  const handleStudent = (item) => {
    const newItem = {
      name: item,
    };
    setList([...list, newItem]);
    setItem("");
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
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
        />
        <button onClick={() => handleStudent(item)}>Add</button>
      </div>
    </>
  );
};

export default StudentList;
