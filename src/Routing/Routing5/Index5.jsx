import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Question1 from "../../Modals/Assignment5/Question1/Question1";
import Question2 from "../../Modals/Assignment5/Question2/Question2";
import Question3 from "../../Modals/Assignment5/Question3/Question3";
import Question4 from "../../Modals/Assignment5/Question4/Question4";
import Question5 from "../../Modals/Assignment5/Question5/Question5";
import Question6 from "../../Modals/Assignment5/Question6/Question6";
import Question7 from "../../Modals/Assignment5/Question7/Question7";
import Question12 from "../../Modals/Assignment5/Question12/Question12";
import Question13 from "../../Modals/Assignment5/Question13/Question13";
import Question15 from "../../Modals/Assignment5/Question15/Question15";
import Question16 from "../../Modals/Assignment5/Question16/Question16";
import Question14 from "../../Modals/Assignment5/Question14/Routing/Routing";
import ApolloProvider2 from "../../Modals/Assignment5/Question9/ApolloProvider2";
import ApolloProvider1 from "../../Modals/Assignment5/Question8/ApolloProvider1";
import { style } from "../../Helper/Styles";
import Question from "../../MockData/Data5";
const Index5 = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Nav style={style.div} />
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
              element={
                <ApolloProvider1 style={style} value={Question.Question8} />
              }
            />
            <Route
              path="/question9"
              element={
                <ApolloProvider2 style={style} value={Question.Question9} />
              }
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
              path="/question14/*"
              element={<Question14 style={style} value={Question.Question14} />}
            />
            <Route
              path="/question15"
              element={<Question15 style={style} value={Question.Question15} />}
            />
            <Route
              path="/question16"
              element={<Question16 style={style} value={Question.Question16} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default Index5;
