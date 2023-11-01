import { useState } from "react";
import { createContext } from "react";
import Child from "./Child";

export const userState = createContext();
export const userTheme = createContext();
const Question2 = (props) => {
  const { style, value } = props;
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <div style={{ border: "2px solid", padding: "20px" }}>
      <div style={style.div}>{value}</div>
      <div>
        <userState.Provider value={{ login, setLogin }}>
          <userTheme.Provider value={{ theme, setTheme }}>
            <Child />
          </userTheme.Provider>
        </userState.Provider>
      </div>
    </div>
  );
};
export default Question2;
