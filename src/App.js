import "./App.css";

import Assignment5 from "./Modals/Assignment5";
import Assignment4 from "./Modals/Assignment4";
import Assignment3 from "./Modals/Assignment3";
import Assignment2 from "./Modals/Assignment2";
import Assignment1 from "./Modals/Assignment1";
import Assignment6 from "./Modals/Assignment6";
import { styleAll } from "./Helper/Styles";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Links from "./Components/Links";
function App() {
  return (
    <div style={styleAll.div2} className="App">
      <BrowserRouter>
      <Links/>
        <Routes>
          <Route path="/Assignment1" element={<Assignment1 />} />
          <Route path="/Assignment2/*" element={<Assignment2 />} />
          <Route path="/Assignment3/*" element={<Assignment3 />} />
          <Route path="/Assignment4/*" element={<Assignment4 />} />
          <Route path="/Assignment5/*" element={<Assignment5 />} />
          <Route path="/Assignment6" element={<Assignment6 />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
export default App;
