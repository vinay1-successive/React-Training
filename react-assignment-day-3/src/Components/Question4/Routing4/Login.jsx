import { userState } from "../../../Routing/Routing";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../../../MockData/userData";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(userState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      password: e.target.password.value,
    };
    console.log(newUser);
    if (
      userData.name === newUser.name &&
      userData.password === newUser.password
    ) {
      setUser(true);
      navigate("home");
    }
  };
  return (
    <>
      <div></div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <input name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;
