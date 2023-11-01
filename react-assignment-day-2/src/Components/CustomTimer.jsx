import { useEffect, useState } from "react";

const CustomTimer = (props) => {
  const [state, setState] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, setHours] = useState(0);
  const handleRest = () => {
    setSeconds(0);
    setMinute(0);
    setHours(0);
    setState(false);
  };
  useEffect(() => {
    if (state) {
      const id = setInterval(() => {
        setSeconds(seconds - 1);
        setMinute(seconds - 1);
        setHours(seconds - 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [seconds, state, minute, hours]);
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div>
        <input
          type="number"
          onChange={(e) => setSeconds(e.target.value)}
          value={seconds}
        />
        Timer: {parseInt(hours / 3600) % 3600}:{parseInt(minute / 60) % 60}:
        {seconds % 60}
        <button onClick={() => setState(true)}>Start</button>
        <button onClick={() => setState(false)}>Pause</button>
        <button onClick={handleRest}>Reset</button>
      </div>
    </>
  );
};

export default CustomTimer;
