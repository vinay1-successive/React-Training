import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { userState3 } from "../../../../Routing/Routing3/Index3";
import { styleAll } from "../../../../Helper/Styles";

const Dashboard = () => {
  const { user } = useContext(userState3);
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
