import { useContext } from "react";
import { useState } from "react";
import { userState, userTheme } from "./Question2";

const Child = () => {
  const { login, setLogin } = useContext(userState);
  const { theme, setTheme } = useContext(userTheme);
  const [name, setName] = useState("");
  const handleLogin = () => {
    !login && name ? setLogin(!login) : setLogin(false);
  };
  const style = {
    dark: {
      div: { backgroundColor: "black", padding: "20px" },
      p: {
        color: "white",
        fontSize: "30px",
      },
    },
    light: {
      div: { backgroundColor: "white", padding: "20px" },
      p: {
        color: "black",
        fontSize: "30px",
      },
    },
  };
  return (
    <>
      <div>
        User LoggedIn:{" "}
        {login && name ? (
          <div style={style[theme].div}>
            <p style={style[theme].p}>Welcome {name}!</p>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
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
