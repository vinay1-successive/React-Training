import { useEffect, useState } from "react";
import { styleAll } from "../Question";

const useTimer = () => {
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
  return {
    seconds,
    setSeconds,
    minute,
    hours,
    setState,
    handleRest,
  };
};

const CustomTimer = (props) => {
  const { minute, seconds, setSeconds, hours, setState, handleRest } =
    useTimer();
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div style={styleAll.div1}>
        <input
          style={styleAll.label}
          type="number"
          onChange={(e) => setSeconds(e.target.value)}
          value={seconds}
        />
        <p style={styleAll.label}>
          Timer: {parseInt(hours / 3600) % 3600}:{parseInt(minute / 60) % 60}:
          {seconds % 60}
        </p>
        <div style={styleAll.div}>
          <button style={styleAll.label} onClick={() => setState(true)}>
            Start
          </button>
          <button style={styleAll.label} onClick={() => setState(false)}>
            Pause
          </button>
          <button style={styleAll.label} onClick={handleRest}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomTimer;
