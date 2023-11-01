import Question from "./data.js";
import Counter from "./Counter.jsx";
import PersonForm from "./PersonForm.jsx";
import TodoList from "./TodoList.jsx";
import RandomNumberGenerator from "./RandomNumberGenerator.jsx";
import CounterWithStep from "./CounterWithStep.jsx";
import Clock from "./Clock.jsx";
import Notification from "./Notification.jsx";
import SlideShow from "./SlideShow.jsx";
import Themes from "./Themes.jsx";
import LanguageSwitch from "./LanguageSwitch.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import Voting from "./Voting.jsx";
import ParentChild from "./ParentChildCount.jsx";
import TaskList from "./TaskList.jsx";
import StudentList from "./StudentList.jsx";
import EmployeeSalary from "./EmployeeSalary.jsx";
import CopyToClipboard from "./CopyToClipboard.jsx";
import UseLocalStorage from "./UseLocalStorage.jsx";
import CustomTimer from "./CustomTimer.jsx";
const Questions = () => {
  const Styles = {
    div: {
      backgroundColor: "beige",
    },
  };
  return (
    <>
      <div>
        <Counter styles={Styles} value={Question.Counter} />
        <PersonForm styles={Styles} value={Question.PersonForm} />
        <TodoList styles={Styles} value={Question.TodoList} />
        <RandomNumberGenerator
          styles={Styles}
          value={Question.RandomNumberGenerator}
        />
        <CounterWithStep
          styles={Styles}
          value={Question.RandomNumberGenerator}
        />
        <Clock styles={Styles} value={Question.Clock} />
        <Notification styles={Styles} value={Question.Notification} />
        <SlideShow styles={Styles} value={Question.SlideShow} />
        <Themes styles={Styles} value={Question.Themes} />
        <LanguageSwitch styles={Styles} value={Question.Clock} />
        <ShoppingCart styles={Styles} value={Question.ShoppingCart} />
        <Voting styles={Styles} value={Question.Voting} />
        <ParentChild styles={Styles} value={Question.ParentChild} />
        <TaskList styles={Styles} value={Question.TaskList} />
        <StudentList styles={Styles} value={Question.StudentList} />
        <EmployeeSalary styles={Styles} value={Question.EmployeeSalary} />
        <CopyToClipboard styles={Styles} value={Question.CoptToClipboard} />
        <UseLocalStorage styles={Styles} value={Question.UseLocalStorage} />
        <CustomTimer styles={Styles} value={Question.CustomTimer} />
      </div>
    </>
  );
};

export default Questions;
