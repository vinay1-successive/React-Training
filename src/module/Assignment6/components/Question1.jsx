import React, { Suspense } from "react";
import { styleAll } from "../../../helper/Styles";
import QuestionData from "../../../components/QuestionData";
import Question from "../../../mockData/Data6";
import { ErrorBoundary } from "react-error-boundary";
const Component1 = React.lazy(() => import("../helper/Component1"));
const Component2 = React.lazy(() => import("../helper/Component2"));
const Component3 = React.lazy(() => import("../../../components/QuestionData"));
const Question1 = (props) => {
  const { name } = props;
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
  } else if (!name) {
    console.log(name, 'name-----------------------')
    return (
      <>
        <ErrorBoundary
          fallback={<div>Something went wrong</div>}
        ></ErrorBoundary>
      </>
    );
  } else {
    console.log('else-------------------------------')
    return (
      <>
        <Component3 />
        <div style={styleAll.div}>Invalid Page</div>
      </>
    );
  }
};
export default Question1;
