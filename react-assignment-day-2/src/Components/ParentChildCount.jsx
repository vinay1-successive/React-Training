import { useCallback, useState } from "react";

const ParentChildCount = (props) => {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <Child count={count} handleCount={handleCount} />
    </>
  );
};

const Child = ({ count, handleCount }) => {
  return (
    <>
      <p>{count}</p>
      <button onClick={handleCount}>Increase Count</button>
    </>
  );
};

export default ParentChildCount;
