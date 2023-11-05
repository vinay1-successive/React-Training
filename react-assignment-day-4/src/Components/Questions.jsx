import Question1 from "./Question1/Question1";
import Question2 from "./Question2/Question2";
import Question3 from "./Question3/Question3";
import Question4 from "./Question4/Question4";
import Question5 from "./Question5/Question5";
import Question6 from "./Question6/Question6";
import Question, { style } from "./Data";
import Question7 from "./Question7/Question7";
import Question8 from "./Question8/Question8";
import Question9 from "./Question9/Question9";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question10 from "./Question10/Question10";
import Question11 from "./Question11/Question11";
import Question12 from "./Question12/Question12";
import Question13 from "./Question13/Question13";
import Question14 from "./Question14/Question14";

const Questions = () => {
  return (
    <>
      <div>
        <BrowserRouter>
        <Question9 style={style}  />
          <Routes>
            <Route
              path="/question1"
              element={<Question1 style={style} value={Question.Question1} />}
            />
            <Route
              path="/question2"
              element={<Question2 style={style} value={Question.Question2} />}
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
            <Route
              path="/question7"
              element={<Question7 style={style} value={Question.Question7} />}
            />
            <Route
              path="/question8"
              element={<Question8 style={style} value={Question.Question8} />}
            />
            <Route
              path="/question9"
              element={<Question9 style={style} value={Question.Question9} />}
            />
            <Route
              path="/question10"
              element={<Question10 style={style} value={Question.Question10} />}
            />
            <Route
              path="/question11"
              element={<Question11 style={style} value={Question.Question11} />}
            />
            <Route
              path="/question12"
              element={<Question12 style={style} value={Question.Question12} />}
            />
             <Route
              path="/question13"
              element={<Question13 style={style} value={Question.Question13} />}
            />
            <Route
              path="/question14"
              element={<Question14 style={style} value={Question.Question14} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default Questions;
