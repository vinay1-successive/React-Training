import { userState } from  "../Questions"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../Question";
const Login = () => {
  const navigate=useNavigate();
  const { user, setUser } = useContext(userState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      password: e.target.password.value,
    };
    console.log(newUser);
    if (data.name === newUser.name && data.password === newUser.password) {
      setUser(true);
      navigate("home")
    }
  };
  return (
    <>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
      </div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <input name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;
