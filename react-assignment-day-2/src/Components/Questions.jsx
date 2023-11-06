import Question from "../data.js";
import Counter from "./Counter/Counter.jsx";
import PersonForm from "./PersonForm/PersonForm.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import RandomNumberGenerator from "./RandomNumberGenerator/RandomNumberGenerator.jsx";
import CounterWithStep from "./CounterWithStep/CounterWithStep.jsx";
import Clock from "./Clock/Clock.jsx";
import Notification from "./Notification/Notification.jsx";
import SlideShow from "./SlideShow/SlideShow.jsx";
import Themes from "./Themes/Themes.jsx";
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch.jsx";
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx";
import Voting from "./Voting/Voting.jsx";
import ParentChild from "./ParentChildCount/ParentChildCount.jsx";
import TaskList from "./TaskList/TaskList.jsx";
import StudentList from "./StudentList/StudentList.jsx";
import EmployeeSalary from "./EmployeeSalary/EmployeeSalary.jsx";
import CopyToClipboard from "./CopyToClipboard/CopyToClipboard.jsx";
import UseLocalStorage1 from "./UseLocalStorage/UseLocalStorage1.jsx";
import CustomTimer from "./CustomTimer/CustomTimer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./Links/Links.jsx";
import Error from './Error.jsx'
import { StylesQuestions } from "./Question.js";
const Questions = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Links />}>
              <Route
                path="/question1"
                element={
                  <Counter styles={StylesQuestions} value={Question.Counter} />
                }
              />
              <Route
                path="/question2"
                element={
                  <PersonForm
                    styles={StylesQuestions}
                    value={Question.PersonForm}
                  />
                }
              />
              <Route
                path="/question3"
                element={
                  <TodoList
                    styles={StylesQuestions}
                    value={Question.TodoList}
                  />
                }
              />
              <Route
                path="/question4"
                element={
                  <RandomNumberGenerator
                    styles={StylesQuestions}
                    value={Question.RandomNumberGenerator}
                  />
                }
              />
              <Route
                path="/question5"
                element={
                  <CounterWithStep
                    styles={StylesQuestions}
                    value={Question.CounterWithStep}
                  />
                }
              />
              <Route
                path="/question6"
                element={
                  <Clock styles={StylesQuestions} value={Question.Clock} />
                }
              />
              <Route
                path="/question7"
                element={
                  <Notification
                    styles={StylesQuestions}
                    value={Question.Notification}
                  />
                }
              />
              <Route
                path="/question8"
                element={
                  <SlideShow
                    styles={StylesQuestions}
                    value={Question.SlideShow}
                  />
                }
              />
              <Route
                path="/question9"
                element={
                  <Themes styles={StylesQuestions} value={Question.Themes} />
                }
              />
              <Route
                path="/question10"
                element={
                  <LanguageSwitch
                    styles={StylesQuestions}
                    value={Question.LanguageSwitch}
                  />
                }
              />
              <Route
                path="/question11"
                element={
                  <ShoppingCart
                    styles={StylesQuestions}
                    value={Question.ShoppingCart}
                  />
                }
              />
              <Route
                path="/question12"
                element={
                  <Voting styles={StylesQuestions} value={Question.Voting} />
                }
              />
              <Route
                path="/question13"
                element={
                  <ParentChild
                    styles={StylesQuestions}
                    value={Question.ParentChild}
                  />
                }
              />
              <Route
                path="/question14"
                element={
                  <TaskList
                    styles={StylesQuestions}
                    value={Question.TaskList}
                  />
                }
              />
              <Route
                path="/question15"
                element={
                  <StudentList
                    styles={StylesQuestions}
                    value={Question.StudentList}
                  />
                }
              />
              <Route
                path="/question16"
                element={
                  <EmployeeSalary
                    styles={StylesQuestions}
                    value={Question.EmployeeSalary}
                  />
                }
              />
              <Route
                path="/question17"
                element={
                  <CopyToClipboard
                    styles={StylesQuestions}
                    value={Question.CoptToClipboard}
                  />
                }
              />
              <Route
                path="/question18"
                element={
                  <UseLocalStorage1
                    styles={StylesQuestions}
                    value={Question.UseLocalStorage}
                  />
                }
              />
              <Route
                path="/question19"
                element={
                  <CustomTimer
                    styles={StylesQuestions}
                    value={Question.CustomTimer}
                  />
                }
              />
            </Route>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Questions;
