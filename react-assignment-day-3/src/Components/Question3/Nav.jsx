import { Link } from "react-router-dom";

const Nav = () => {
  const style = {
    div: { display: "flex", width: "100px", justifyContent: "space-between" },
    Link: {
      textDecoration: "none",
    },
  };
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
