import { useEffect, useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import QuestionData from '../../../Components/QuestionData'
const Clock = (props) => {
  const [time, setTime] = useState(new Date());

  const timeHandler = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const id = setTimeout(timeHandler, 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <>
      
      <QuestionData value={props.value}/>
      <div style={styleAll.div1}>{time.toLocaleTimeString()}</div>
    </>
  );
};
export default Clock;
