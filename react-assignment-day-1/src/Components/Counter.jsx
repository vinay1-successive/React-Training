import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{display:"flex"}}>
      <button style={{fontSize:"30px",width:"100px"}} onClick={() => setValue(value - 1)}>sub</button>
      <p style={{fontSize:"60px",height:"40px"}}>{value}</p>
      <button style={{fontSize:"30px",width:"100px"}} onClick={() => setValue(value + 1)}>add</button>
    </div>
  );
};
