import { useState } from "react";
import { createContext } from "react";
import Child from "./Child";

export const userState = createContext();
const Question1 = (props) => {
  const { style, value } = props;

  const [login, setLogin] = useState(false);
  return (
    <div style={{ border: "2px solid", padding: "20px" }}>
      <div style={style.div}>{value}</div>
      <div>
        <userState.Provider value={{ login, setLogin }}>
          <Child />
        </userState.Provider>
      </div>
    </div>
  );
};
export default Question1;
