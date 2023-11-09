import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";
import { useContext } from "react";
import Profile from "../Dashboard/Profile";
import Setting from "../Dashboard/Setting";
import Product from "../Products/Product";
import productData from "../../../../../MockData/productData";
import Error from "./Error";
import { styleAll } from "../../../../../Helper/Styles";
import { userState3 } from "../../../Assignment3";
const Routing4 = (props) => {
  const { user, setUser } = useContext(userState3);
  const { value } = props;
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
        <Link onClick={() => setUser(false)} style={styleAll.link} to="home">
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
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route>
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>

        <Route path="products/*" element={<Products />}>
          <Route path=":pId" element={<Product value={productData} />} />
        </Route>

        <Route path=":any" element={<Error />} />
      </Routes>
    </div>
  );
};
export default Routing4;
