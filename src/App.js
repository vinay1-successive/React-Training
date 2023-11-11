import "./App.css";

import Assignment4 from "./module/Assignment4";
import Assignment3 from "./module/Assignment3";
import Assignment2 from "./module/Assignment2";
import Assignment1 from "./module/Assignment1";
import { styleAll } from "./helper/Styles";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Links";
import { linkTextMain } from "./mockData/AssingmentLinks";
function App() {
  return (
    <div style={styleAll.div2} className="App">
      <BrowserRouter>
      <Nav props={linkTextMain} />
        <Routes>
          <Route path="/Assignment1" element={<Assignment1 />} />
          <Route path="/Assignment2/*" element={<Assignment2 />} />
          <Route path="/Assignment3/*" element={<Assignment3 />} />
          <Route path="/Assignment4/*" element={<Assignment4 />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
export default App;
