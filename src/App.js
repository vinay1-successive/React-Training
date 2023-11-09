import "./App.css";
// import { ErrorBoundary } from "react-error-boundary";

import Assignment5 from "./Modals/Assignment5";
import Assignment4 from "./Modals/Assignment4";
import Assignment3 from "./Modals/Assignment3";
import Assignment2 from "./Modals/Assignment2";
import Assignment1 from "./Modals/Assignment1";
import Assignment6 from "./Modals/Assignment6";
import { styleAll } from "./Helper/Styles";
function App() {
  return (
    <div style={styleAll.div2} className="App">
      {/* <ErrorBoundary fallback={<div>Something went wrong</div>}> */}
        <Assignment1 />
        <Assignment2 />
        <Assignment3 />
        <Assignment4 />
        <Assignment5 />
        <Assignment6 />
      {/* </ErrorBoundary> */}
    </div>
  );
}
export default App;
