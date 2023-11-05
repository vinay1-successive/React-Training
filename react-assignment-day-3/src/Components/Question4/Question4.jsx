import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Products from "./Products";
import { styleAll } from "../Question";
import { useContext } from "react";
import { userState } from "../Questions";
import Error from "../Error";
const Question4 = (props) => {

  const { user, setUser } = useContext(userState);
  const { style, value } = props;
  return (
    
      <div>
        <div style={styleAll.Ques}>{value[0]}</div>
        <div style={styleAll.Ques}>{value[1]}</div>
        <div style={styleAll.Ques}>{value[2]}</div>
        <Link style={styleAll.link} to="home">
          Home
        </Link>
        <Link style={styleAll.link} to="about">
          About
        </Link>

        <Link style={styleAll.link} to="dashboard">
          Dashboard
        </Link>
        <Link style={styleAll.link} to="products">
          Products
        </Link>
        {user ? (
          <Link onClick={()=> setUser(false)} style={styleAll.link} to="home">
            Log Out
          </Link>
        ) : (
          <Link style={styleAll.link} to="login">
            Login
          </Link>
        )}

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="products/*" element={<Products />} />
          <Route path=":any" element={<Error/>}/>
        </Routes>
      </div>
  );
};
export default Question4;
