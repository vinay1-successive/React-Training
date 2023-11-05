import { useState } from "react";
import { createContext } from "react";
import Child from "./Child";
import { styleAll } from "../Question";

export const userState = createContext();
const Question1 = (props) => {
  const { style, value } = props;

  const [login, setLogin] = useState(false);
  return (
    <div>
      <div style={styleAll.Ques}>{value}</div>
      <div>
        <userState.Provider value={{ login, setLogin }}>
          <Child />
        </userState.Provider>
      </div>
    </div>
  );
};
export default Question1;
