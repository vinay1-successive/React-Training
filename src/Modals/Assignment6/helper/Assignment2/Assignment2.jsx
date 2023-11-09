import PersonForm from "./componenets/PersonForm.jsx";
import TodoList from "./componenets/TodoList.jsx";
import RandomNumberGenerator from "./componenets/RandomNumberGenerator.jsx";
import CounterWithStep from "./componenets/CounterWithStep.jsx";
import Clock from "./componenets/Clock.jsx";
import Notification from "./componenets/Notification.jsx";
import SlideShow from "./componenets/SlideShow.jsx";
import Themes from "./componenets/Themes.jsx";
import LanguageSwitch from "./componenets/LanguageSwitch.jsx";
import ShoppingCart from "./componenets/ShoppingCart.jsx";
import Voting from "./componenets/Voting.jsx";
import ParentChild from "./componenets/ParentChildCount.jsx";
import TaskList from "./componenets/TaskList.jsx";
import StudentList from "./componenets/StudentList.jsx";
import EmployeeSalary from "./componenets/EmployeeSalary.jsx";
import CopyToClipboard from "./componenets/CopyToClipboard.jsx";
import UseLocalStorage1 from "./componenets/UseLocalStorage1.jsx";
import CustomTimer from "./componenets/CustomTimer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./componenets/Links.jsx";
import Error from "./componenets/Error.jsx";
import Question from "../../MockData/Data2.js";
import { styleAll } from "../../Helper/Styles.js";
import Counter from "./componenets/Counter.jsx";
const Assignment2 = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100vw", flexDirection: "column" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Links />}>
              <Route
                path="/question1"
                element={<Counter styles={styleAll} value={Question.Counter} />}
              />
              <Route
                path="/question2"
                element={
                  <PersonForm styles={styleAll} value={Question.PersonForm} />
                }
              />
              <Route
                path="/question3"
                element={
                  <TodoList styles={styleAll} value={Question.TodoList} />
                }
              />
              <Route
                path="/question4"
                element={
                  <RandomNumberGenerator
                    styles={styleAll}
                    value={Question.RandomNumberGenerator}
                  />
                }
              />
              <Route
                path="/question5"
                element={
                  <CounterWithStep
                    styles={styleAll}
                    value={Question.CounterWithStep}
                  />
                }
              />
              <Route
                path="/question6"
                element={<Clock styles={styleAll} value={Question.Clock} />}
              />
              <Route
                path="/question7"
                element={
                  <Notification
                    styles={styleAll}
                    value={Question.Notification}
                  />
                }
              />
              <Route
                path="/question8"
                element={
                  <SlideShow styles={styleAll} value={Question.SlideShow} />
                }
              />
              <Route
                path="/question9"
                element={<Themes styles={styleAll} value={Question.Themes} />}
              />
              <Route
                path="/question10"
                element={
                  <LanguageSwitch
                    styles={styleAll}
                    value={Question.LanguageSwitch}
                  />
                }
              />
              <Route
                path="/question11"
                element={
                  <ShoppingCart
                    styles={styleAll}
                    value={Question.ShoppingCart}
                  />
                }
              />
              <Route
                path="/question12"
                element={<Voting styles={styleAll} value={Question.Voting} />}
              />
              <Route
                path="/question13"
                element={
                  <ParentChild styles={styleAll} value={Question.ParentChild} />
                }
              />
              <Route
                path="/question14"
                element={
                  <TaskList styles={styleAll} value={Question.TaskList} />
                }
              />
              <Route
                path="/question15"
                element={
                  <StudentList styles={styleAll} value={Question.StudentList} />
                }
              />
              <Route
                path="/question16"
                element={
                  <EmployeeSalary
                    styles={styleAll}
                    value={Question.EmployeeSalary}
                  />
                }
              />
              <Route
                path="/question17"
                element={
                  <CopyToClipboard
                    styles={styleAll}
                    value={Question.CoptToClipboard}
                  />
                }
              />
              <Route
                path="/question18"
                element={
                  <UseLocalStorage1
                    styles={styleAll}
                    value={Question.UseLocalStorage}
                  />
                }
              />
              <Route
                path="/question19"
                element={
                  <CustomTimer styles={styleAll} value={Question.CustomTimer} />
                }
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Assignment2;
