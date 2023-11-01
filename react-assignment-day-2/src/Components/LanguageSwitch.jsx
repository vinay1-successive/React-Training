import { createContext, useContext, useState } from "react";

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
      <div>
        {text[language]}
        <div>
          <button onClick={() => setLanguage("English")}>English</button>
          <button onClick={() => setLanguage("Spanish")}>Spanish</button>
        </div>
      </div>
    </>
  );
};
export default LanguageSwitch;
