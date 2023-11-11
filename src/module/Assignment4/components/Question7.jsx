import { useEffect, useState } from "react";
import InputField from "../../../components/InputField";

const Question7 = (props) => {
  const list = ["Hello", "Karan", "How", "Are", "You"];
  const [input, setInput] = useState("");
  const [filterdList, setFilteredList] = useState(list);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    setFilteredList(
      list.filter((item) => item.toLowerCase().includes(input.toLowerCase()))
    );
  }, [input]);
  return (
    <>
      <div>
        <div style={props.style.div}>
          <div style={props.style.Ques}>{props.value}</div>
          <InputField
            props={{ ...props, type: "text", fun: handleChange, value: input }}
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
