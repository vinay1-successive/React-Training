import { useState } from "react";
import { styleAll } from "../Question";

const UseLocalStorage = (props) => {
  const [text, setText] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const saveToLocalStorage = (data) => {
    localStorage.setItem("items", JSON.stringify(data));
    setData(data);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("items");
    setData([]);
  };
  const handleInput = () => {
    saveToLocalStorage([...data, { name: text }]);
    setText("");
  };

  return (
    <div>
      <div style={props.styles.div}>{props.value}</div>
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

export default UseLocalStorage;
