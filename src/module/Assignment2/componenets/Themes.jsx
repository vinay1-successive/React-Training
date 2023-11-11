import { createContext, useContext, useState } from "react";
import { styles } from "../helper/helper";
import QuestionData from "../../../components/QuestionData";
export const userTheme = createContext();
const Themes = (props) => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <QuestionData value={props.value}/>
      <userTheme.Provider value={{ theme, setTheme }}>
        <Theme />
      </userTheme.Provider>
    </>
  );
};

const Theme = () => {
  const { theme, setTheme } = useContext(userTheme);

  return (
    <>
      <div style={styles[theme].div}>
        <p style={styles[theme].p}>Hello</p>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme}
        </button>
      </div>
    </>
  );
};

export default Themes;
