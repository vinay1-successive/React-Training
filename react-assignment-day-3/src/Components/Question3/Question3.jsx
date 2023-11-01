import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
const Question3 = (props) => {
  const { style, value } = props;
  return (
    <div style={{ border: "2px solid", padding: "20px" }}>
      <div style={style.div}>{value}</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Question3;
