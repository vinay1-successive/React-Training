import { useContext } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { userState } from "../Questions"
import Profile from "./Profile";
import Setting from "./Setting";
import { styleAll } from "../Question";

const Dashboard = () => {
  const { user, setUser } = useContext(userState);
  return (
    <>
      {user && (
        <>
          <div style={styleAll.link}>
            <Link style={styleAll.link} to="profile">
              Profile
            </Link>
            <Link style={styleAll.link} to="setting">
              Setting
            </Link>
          </div>
        </>
      )}
      <div style={{ flexDirection: "column", display: "flex" }}>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
