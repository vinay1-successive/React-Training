import { createContext, useState } from "react";
import Error from "../Assignment3/helper/Error.jsx";
import Nav from "../Assignment3/helper/Nav.jsx";
import Question from "../../MockData/Data3.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question1 from "../../Modals/Assignment3/components/Question1/Question1.jsx";
import Question2 from "../../Modals/Assignment3/components/Question2/Question2.jsx";
import Routing from "../../Modals/Assignment3/components/Question3/Routing.jsx";
import Question4 from "../../Modals/Assignment3/components/Question4/Routing4/Routing4.jsx";
import { styleAll } from "../../Helper/Styles.js";

export const userState3 = createContext();

const Assignment3 = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <div>
        <userState3.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route
                path="/question1"
                element={
                  <Question1 style={styleAll} value={Question.Question1} />
                }
              />
              <Route
                path="/question2"
                element={
                  <Question2 style={styleAll} value={Question.Question2} />
                }
              />
              <Route
                path="/question3/*"
                element={
                  <Routing style={styleAll} value={Question.Question3} />
                }
              />
              <Route
                path="/question4/*"
                element={
                  <Question4
                    style={styleAll}
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
        </userState3.Provider>
      </div>
    </>
  );
};
export default Assignment3;
