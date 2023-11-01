import { userState } from "./Question4";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "./Question4";
const Login = () => {
  const { user, setUser } = useContext(userState);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      password: e.target.password.value,
    };
    console.log(newUser);
    if (data.name === newUser.name && data.password === newUser.password) {
      setUser(true);
      navigate("/");
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user ? (
          <>
            <Link onClick={() => setUser(false)} to="/">
              Log out
            </Link>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
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
