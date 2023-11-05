import { useState } from "react";
import { createContext } from "react";
import Child from "./Child";
import { styleAll } from "../Question";

export const userState = createContext();
export const userTheme = createContext();
const Question2 = (props) => {
  const { style, value } = props;
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <div style={styleAll.Ques}>{value}</div>
      <div style={styleAll.form}>
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
