import { createContext, useState } from "react";
import Error from "./Error.jsx";
import Nav from "./Nav.jsx";
import Question from "../MockData/Question.js";
import Question1 from "../Components/Question1/Question1.jsx";
import Question2 from "../Components/Question2/Question2.jsx";
import Question3 from "../Components/Question3/Routing3.jsx";
import Question4 from "../Components/Question4/Routing4.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const userState = createContext();

const Routing = () => {
  const [user, setUser] = useState(false);
  const Style = {
    div: {
      backgroundColor: "beige",
      border: "2px solid",
      padding: "10px",
    },
  };
  return (
    <>
      <div>
        <userState.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route
                path="/question1"
                element={<Question1 style={Style} value={Question.Question1} />}
              />
              <Route
                path="/question2"
                element={<Question2 style={Style} value={Question.Question2} />}
              />
              <Route
                path="/question3/*"
                element={<Question3 style={Style} value={Question.Question3} />}
              />
              <Route
                path="/question4/*"
                element={
                  <Question4
                    style={Style}
                    value={[
                      Question.Question4,
                      Question.Question5,
                      Question.Question6,
                    ]}
                  />
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </userState.Provider>
      </div>
    </>
  );
};
export default Routing;
