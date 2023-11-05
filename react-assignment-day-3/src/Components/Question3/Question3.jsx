import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import { styleAll } from "../Question";
const Question3 = (props) => {
  const { style, value } = props;
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
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path=":any" element={<Error />} />
      </Routes>

      <Outlet />
    </div>
  );
};
export default Question3;
