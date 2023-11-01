import { useState } from "react";
import { useContext } from "react";
import { userState } from "./Question1";

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
