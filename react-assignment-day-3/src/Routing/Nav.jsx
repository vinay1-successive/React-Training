import { Link, Outlet } from "react-router-dom";
import styleAll from "../handler/Style";
const Nav = () => {
  return (
    <>
      <div style={styleAll.div}>
        <Link style={styleAll.link} to="/question1">
          Question1
        </Link>
        <Link style={styleAll.link} to="/question2">
          Question2
        </Link>
        <Link style={styleAll.link} to="/question3">
          Question3
        </Link>
        <Link style={styleAll.link} to="/question4">
          Question4
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default Nav;
