import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { userState } from "./Question4";

const Dashboard = () => {
  const { user, setUser } = useContext(userState);
  return (
    <>
      <div style={{ flexDirection: "column", display: "flex" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        {user ? (
          <>
            <Link onClick={() => setUser(false)} to="/">
              Log out
            </Link>
            <div>Dashboard Page</div>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/setting">Setting</Link>
            <Outlet />
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </>
  );
};

export default Dashboard;
