import { Link, Outlet } from "react-router-dom";
import { styleAll } from "../Helper/Styles";
const Links = () => {
  return (
    <>
      <div style={styleAll.div}>
        <Link style={styleAll.link} to="/Assignment1">
          Assignment1
        </Link>
        <Link style={styleAll.link} to="/Assignment2">
          Assignment2
        </Link>
        <Link style={styleAll.link} to="/Assignment3">
          Assignment3
        </Link>
        <Link style={styleAll.link} to="/Assignment4">
          Assignment4
        </Link>
        <Link style={styleAll.link} to="/Assignment5">
          Assignment5
        </Link>
        <Link style={styleAll.link} to="/Assignment6">
          Assignment6
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default Links;