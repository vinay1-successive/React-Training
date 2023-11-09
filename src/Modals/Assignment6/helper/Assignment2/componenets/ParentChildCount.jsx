import { useCallback, useState } from "react";
import { styleAll } from "../../../Helper/Styles";
import QuestionData from "../../../Components/QuestionData";
const ParentChildCount = (props) => {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <QuestionData value={props.value}/>
      <Child count={count} setCount={setCount} handleCount={handleCount} />
    </>
  );
};

const Child = ({ count, setCount, handleCount }) => {
  return (
    <>
      <div style={styleAll.div}>
        <p style={styleAll.input}>{count}</p>
        <button style={styleAll.label} onClick={handleCount}>
          Increase Count
        </button>
        <button style={styleAll.label} onClick={() => setCount(0)}>
          Reset Count
        </button>
      </div>
    </>
  );
};

export default ParentChildCount;
