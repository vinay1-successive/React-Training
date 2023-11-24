import Assignment5 from "./module/Assignment5";
import Assignment4 from "./module/Assignment4";
import Assignment3 from "./module/Assignment3";
import Assignment2 from "./module/Assignment2";
import Assignment1 from "./module/Assignment1";
import Assignment6 from "./module/Assignment6";
import { styleAll } from "./helper/Styles";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Links from "./components/Links";
import { linkTextMain } from "./mockData/AssingmentLinks";
function App() {
  return (
    <div style={styleAll.div2} className="App">
      <BrowserRouter>
        <Links props={linkTextMain} />
        <Routes>
          <Route path="/Assignment1" element={<Assignment1 />} />
          <Route path="/Assignment2/*" element={<Assignment2 />} />
          <Route path="/Assignment3/*" element={<Assignment3 />} />
          <Route path="/Assignment4/*" element={<Assignment4 />} />
          <Route path="/Assignment5/*" element={<Assignment5 />} />
          <Route path="/Assignment6/*" element={<Assignment6 />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
export default App;
