import React, {lazy, Suspense } from "react";
import QuestionData from "../../../components/QuestionData";
import Question from "../../../mockData/Data6";
import { ErrorBoundary } from "react-error-boundary";
const Component1 = lazy(() => import("../helper/Component1"));
const Component2 = lazy(() => import("../helper/Component2"));
const Question1 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuestionData value={Question.Question1} />
      <QuestionData value={Question.Question2} />
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Component1 />
      </ErrorBoundary>
      <Component2 />
    </Suspense>
  );
};
export default Question1;
