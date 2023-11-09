import { Routes, Route, Link, Outlet } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import About from "./About";
import { styleAll } from "../../../../Helper/Styles";
const Routing = (props) => {
  const { value } = props;
  return (
    <div>
      <div style={styleAll.Ques}>{value}</div>
      <Link style={styleAll.link} to="home">
        Home
      </Link>
      <Link style={styleAll.link} to="about">
        About
      </Link>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path=":any" element={<Error />} />
      </Routes>

      <Outlet />
    </div>
  );
};
export default Routing;
