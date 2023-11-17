import { ErrorBoundary } from "react-error-boundary";
import Question1 from "./components/Question1";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Links from './../../components/Links'
import { linkTextMain6 } from "../../mockData/AssingmentLinks";
import { Route, Routes } from "react-router-dom";
import { style } from "../../helper/Styles";
import Question from "../../mockData/Data6";
const Assignment6 = () => {
  return (
    <>
      <div>
        <Links props={linkTextMain6}/>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Routes>
            <Route
              path="/question1"
              element={<Question1 style={style} value={Question.Question1} />}
            />
            <Route
              path="/question3"
              element={<Question3 style={style} value={Question.Question3} />}
            />
            <Route
              path="/question4"
              element={<Question4 style={style} value={Question.Question4} />}
            />
            <Route
              path="/question5"
              element={<Question5 style={style} value={Question.Question5} />}
            />
            <Route
              path="/question6"
              element={<Question6 style={style} value={Question.Question6} />}
            />
          </Routes>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Assignment6;
