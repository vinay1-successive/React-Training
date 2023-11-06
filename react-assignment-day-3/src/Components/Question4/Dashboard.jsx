import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { userState } from "../../Routing/Routing";
import styleAll from "../../handler/Style";

const Dashboard = () => {
  const { user } = useContext(userState);
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
      <div style={{ flexDirection: "column", display: "flex" }}></div>
      <Outlet />
    </>
  );
};

export default Dashboard;
