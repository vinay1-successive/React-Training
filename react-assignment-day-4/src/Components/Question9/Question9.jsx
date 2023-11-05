import { useState } from "react";
import Sidebar from "./Sidebar";

const Question9 = (props) => {
  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <div style={props.style.div}>
          <div style={props.style.Ques}>{props.value}</div>
          <button onClick={handleSidebar}>Open</button>
          <Sidebar open={open} close={handleSidebar} />
        </div>
      </div>
    </>
  );
};

export default Question9;
