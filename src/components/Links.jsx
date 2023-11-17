import { Link, Outlet } from "react-router-dom";
import { styleAll } from "../helper/Styles";
const Links = ({ props }) => {
  return (
    <>
      <div style={styleAll.div}>
        {props.map((item, index) => {
          return (
            <Link style={styleAll.link} to={item}>
              {item.slice(item.lastIndexOf("/") + 1)}
            </Link>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};
export default Links;
