import { useEffect } from "react";
import React, { useState } from "react";
import { styleAll } from "../../../helper/Styles";
import QuestionData from "../../../components/QuestionData";
const useLocalStorage = (key) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem(key)) || []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  const saveToLocalStorage = (value) => {
    if (value.name !== "") setData([...data, value]);
  };

  const clearLocalStorage = () => {
    setData([]);
    localStorage.clear();
  };

  return { data, saveToLocalStorage, clearLocalStorage };
};

const UseLocalStorage1 = (props) => {
  const [text, setText] = useState("");
  const { data, saveToLocalStorage, clearLocalStorage } =
    useLocalStorage("items");

  const handleInput = () => {
    saveToLocalStorage({ name: text });
    setText("");
  };

  return (
    <div>
      <QuestionData value={props.value}/>
      <div style={styleAll.div1}>
        <input
          style={styleAll.input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <button style={styleAll.label} onClick={handleInput}>
            Save to Local Storage
          </button>
          <button style={styleAll.label} onClick={clearLocalStorage}>
            Clear Local Storage
          </button>
          <p style={styleAll.label}>Stored Object: {JSON.stringify(data)}</p>
        </div>
      </div>
    </div>
  );
};

export default UseLocalStorage1;
