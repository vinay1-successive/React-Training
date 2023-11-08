import { Link } from "react-router-dom";
import { style } from "../../../Helper/Styles";

const Nav = () => {
 
  return (
    <>
      {" "}
      <div style={style.div}>
        <Link style={style.Link} to="/home">
          Home
        </Link>
        <Link style={style.Link} to="/about">
          About
        </Link>
      </div>
    </>
  );
};
export default Nav;
