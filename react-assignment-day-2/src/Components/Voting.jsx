import { useReducer } from "react";

const colors = {
  Red: 0,
  Green: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { ...state, Red: state.Red + 1 };
    case "green":
      return { ...state, Green: state.Green + 1 };
    default:
      return state;
  }
};
const Voting = (props) => {
  const [state, dispatch] = useReducer(reducer, colors);
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div>
        <p>Votes for Red: {state.Red}</p>
        <p>Votes for Green: {state.Green}</p>
        <button onClick={() => dispatch({ type: "red" })}>Color-Red</button>
        <button onClick={() => dispatch({ type: "green" })}>Color-Green</button>
      </div>
    </>
  );
};

export default Voting;
