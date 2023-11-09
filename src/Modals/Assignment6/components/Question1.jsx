import React, { Suspense } from "react";
import { styleAll } from "../../../Helper/Styles";
import QuestionData from "../../../Components/QuestionData";
import Question from "../../../MockData/Data6";
const Component1 = React.lazy(() => import("../helper/Component1"));
const Component2 = React.lazy(() => import("../helper/Component2"));
const Component3 = React.lazy(() => import("../../../Components/QuestionData"));
const Question1 = (props) => {
  console.log(props);
  if (props.value === "Component1") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <QuestionData value={Question.Question1} />
        <QuestionData value={Question.Question2} />
        <Component1 />
      </Suspense>
    );
  } else if (props.value === "Component2") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component2 />
      </Suspense>
    );
  } else {
    return (
      <>
        <Component3 />
        <div style={styleAll.div}>Invalid Page</div>
      </>
    );
  }
};
export default Question1;
