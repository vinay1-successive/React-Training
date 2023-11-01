import { createContext, useContext, useState } from "react";
export const userTheme = createContext();
const styles = {
  dark: {
    div: {
      backgroundColor: "Black",
    },
    p: {
      color: "white",
    },
  },
  light: {
    div: {
      backgroundColor: "white",
    },
    p: {
      color: "black",
    },
  },
};
const Themes = (props) => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
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
