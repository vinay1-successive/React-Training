import { useState } from "react";

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
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleInput}>Save to Local Storage</button>
      <button onClick={clearLocalStorage}>Clear Local Storage</button>
      <p>Stored Object: {JSON.stringify(data)}</p>
    </div>
  );
};

export default UseLocalStorage;
