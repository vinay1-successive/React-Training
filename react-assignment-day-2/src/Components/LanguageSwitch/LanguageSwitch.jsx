import { createContext, useContext, useState } from "react";
import { styleAll } from "../Question";

export const userLanguage = createContext();
const LanguageSwitch = (props) => {
  const [language, setLanguage] = useState("English");
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <userLanguage.Provider value={{ language, setLanguage }}>
        <Language />
      </userLanguage.Provider>
    </>
  );
};

const Language = () => {
  const { language, setLanguage } = useContext(userLanguage);
  const text = {
    English: "Hello EveryOne",
    Spanish: "Hola a todas",
  };
  return (
    <>
      <div style={styleAll.div1}>
        <p style={styleAll.label}> {text[language]}</p>
        <div style={styleAll.div}>
          <button style={styleAll.label} onClick={() => setLanguage("English")}>
            English
          </button>
          <button style={styleAll.label} onClick={() => setLanguage("Spanish")}>
            Spanish
          </button>
        </div>
      </div>
    </>
  );
};
export default LanguageSwitch;
