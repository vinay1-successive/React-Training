import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import { createContext } from "react";
import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Setting from "./Setting";
import Products from "./Products";
import Product from "./Product";
import productData from "./Data";
export const data = {
  name: "Vinay",
  password: "12345",
};
export const userState = createContext();
const Question4 = (props) => {
  const [user, setUser] = useState(false);
  const { style, value } = props;
  return (
    <userState.Provider value={{ user, setUser }}>
      <div style={{ border: "2px solid", padding: "20px" }}>
        <div style={style.div}>{value[0]}</div>
        <div style={style.div}>{value[1]}</div>
        <div style={style.div}>{value[2]}</div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/setting" element={<Setting />} />
            </Route>
            <Route path="/products" element={<Products />} />

            <Route
              path="/products/:pId"
              element={<Product value={productData} />}
            />

            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </userState.Provider>
  );
};
export default Question4;
