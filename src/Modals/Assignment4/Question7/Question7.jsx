import { useEffect, useState } from "react";

const Question7 = (props) => {
  const list = ["Hello", "Karan", "How", "Are", "You"];
  const [input, setInput] = useState("");
  const [filterdList, setFilteredList] = useState(list);
  useEffect(() => {
    setFilteredList(list.filter((item) => item.toLowerCase().includes(input)));
  }, [input]);
  return (
    <>
      <div>
        
        <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
          <input
            style={props.style.input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <ul>
            {filterdList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Question7;
