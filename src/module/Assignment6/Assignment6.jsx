import { ErrorBoundary } from "react-error-boundary";
import Question1 from "./components/Question1";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
const Assignment6 = () => {
  return (
    <>
      <div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Question1 />
          <Question3 />
          <Question4 />
          <Question5
            value={{
              name: "Vinay",
              email: "vinay@gmail.com",
              phone: "7982279945",
            }}
          />
          <Question6 />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Assignment6;
