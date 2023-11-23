import { useReducer } from "react";
import { styleAll } from "../../../helper/Styles";
import QuestionData from "../../../components/QuestionData";
const reducer = (state, action) => {
  switch (action.type) {
    case "vote":
      return { ...state, [action.option]: state[action.option] + 1 };
    default:
      return state;
  }
};
const Voting = (props) => {
  const [state, dispatch] = useReducer(reducer, { Red: 0, Green: 0 });
  const handleClick = (option) => {
    dispatch({ type: "vote", option });
  };
  return (
    <>
      <QuestionData value={props.value} />
      <div style={styleAll.div1}>
        <p style={styleAll.label}>Votes for Red: {state.Red}</p>
        <p style={styleAll.label}>Votes for Green: {state.Green}</p>
        <button style={styleAll.label} onClick={() => handleClick("Red")}>
          Color-Red
        </button>
        <button style={styleAll.label} onClick={() => handleClick("Green")}>
          Color-Green
        </button>
      </div>
    </>
  );
};

export default Voting;
