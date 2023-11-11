import { useState } from "react";
import { useContext } from "react";
import { userState } from "./Question1";
import { styleAll } from "../../../../helper/Styles";

const Child = () => {
  const { login, setLogin } = useContext(userState);
  const [name, setName] = useState("");
  const handleLogin = () => {
    !login && name ? setLogin(!login) : setLogin(false);
  };
  return (
    <>
      <div>
        User LoggedIn:{" "}
        {login && name ? (
          <div>Welcome {name}!</div>
        ) : (
          <div style={styleAll.form1}>
            <p>Please Log In</p>
            <input
              style={styleAll.input}
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button style={styleAll.label} onClick={handleLogin}>
              Click to {login ? "Log out" : "Please Login"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Child;
