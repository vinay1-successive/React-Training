import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./Routing/Routing";

const Login = () => {
  const { user, setUser } = useContext(userContext);
  const navi = useNavigate();
  const [input, setInput] = useState();
  const handleLogin = () => {
    if (input === "Vinay") {
      setUser(true);
      navi("/Assignment5/question14/child");
    }
  };
  return (
    <>
      {!user && (
        <div>
          <input type="text" onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleLogin}>Click</button>
        </div>
      )}
    </>
  );
};

export default Login;
