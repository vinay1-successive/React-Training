import { Link } from "react-router-dom";

import { userState } from "./Question4";
import { useContext } from "react";
const About = () => {
  const { user, setUser } = useContext(userState);
  return (
    <>
      <div
        style={{
          justifyContent: "space-evenly",
          display: "flex",
          flexDirection: "column",
          width: "500px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user ? (
          <>
            <Link onClick={() => setUser(false)} to="/">
              Log out
            </Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/products">Products</Link>
            <div>About Page</div>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </>
  );
};

export default About;
