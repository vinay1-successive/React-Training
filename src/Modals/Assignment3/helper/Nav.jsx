import { Link, Outlet } from "react-router-dom";
import { styleAll } from "../../../Helper/Styles";
const Nav = () => {
  return (
    <>
      <div style={styleAll.div}>
        <Link style={styleAll.link} to="/Assignment3/question1">
          Question1
        </Link>
        <Link style={styleAll.link} to="/Assignment3/question2">
          Question2
        </Link>
        <Link style={styleAll.link} to="/Assignment3/question3">
          Question3
        </Link>
        <Link style={styleAll.link} to="/Assignment3/question4">
          Question4
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default Nav;

