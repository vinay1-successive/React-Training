import { useContext } from "react";
import { useState } from "react";
import { userState, userTheme } from "./Question2";
import { styleTheme } from "../../helper/ChildC";
import { styleAll } from "../../../../Helper/Styles";

const Child = () => {
  const { login, setLogin } = useContext(userState);
  const { theme, setTheme } = useContext(userTheme);
  const [name, setName] = useState("");
  const handleLogin = () => {
    !login && name ? setLogin(!login) : setLogin(false);
  };

  return (
    <>
      <div>
        User LoggedIn:{" "}
        {login && name ? (
          <div style={styleAll.div}>
            <div style={styleTheme[theme].div}>
              <p style={styleTheme[theme].p}>Welcome {name}!</p>
              <button onClick={() => setTheme("light")}>Light</button>
              <button onClick={() => setTheme("dark")}>Dark</button>
            </div>
          </div>
        ) : (
          <div>
            <p>Please Log In</p>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}
        <button onClick={handleLogin}>
          Click to {login ? "Log out" : "Please Login"}
        </button>
      </div>
    </>
  );
};
export default Child;
