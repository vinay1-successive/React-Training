import { Link, Outlet, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Child from "../Child";
import { createContext } from "react";
import { useState } from "react";
import WithAuth from "../WithAuth";
import { styleAll } from "../../../../../Helper/Styles";
export const userContext = createContext(null);
const Routing = (props) => {
  const [user, setUser] = useState(false);
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <userContext.Provider value={{ user, setUser }}>
          <Link to="login">Login</Link>
          <Link to="child">Child</Link>
          <Routes>
            <Route path="child" Component={() => WithAuth(Child)} />
            <Route path="login" Component={Login} />
            <Route />
          </Routes>
        </userContext.Provider>
      </div>
      <Outlet />
    </>
  );
};
export default Routing;
