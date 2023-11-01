import { useContext } from "react";
import { Link } from "react-router-dom";
import { userState } from "./Question4";

const Home = () => {
  const { user, setUser } = useContext(userState);
  return (
    <>
      <div
        style={{
          justifyContent: "space-evenly",
          display: "flex",
          width: "500px",
          flexDirection: "column",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user ? (
          <>
            {" "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link onClick={() => setUser(false)} to="/">
                Log out
              </Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/products">Products</Link>
            </div>
            <div>Home Page</div>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </>
  );
};

export default Home;
