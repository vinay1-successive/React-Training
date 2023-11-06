import { useState } from "react";
import { styleAll } from "../Question";
const CounterWithStep = (props) => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <div style={props.styles.div}>{props.value}</div>

      <div style={styleAll.div}>
        <div>
          <input
            style={styleAll.input}
            type="number"
            value={step}
            onChange={(e) => setStep(e.target.value)}
          />
        </div>
        <div style={styleAll.div}>
          <button
            style={styleAll.button}
            onClick={() => setValue(value - step)}
          >
            -
          </button>
          <p style={{ fontSize: "20px" }}>{value}</p>
          <button
            style={styleAll.button}
            onClick={() => setValue(value + Number(step))}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterWithStep;
