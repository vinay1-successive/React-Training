import "./App.css";
import { Button } from "./Components/Button";
import { Counter } from "./Components/Counter";
import { Greetings } from "./Components/Greetings";
import { TaskList } from "./Components/TaskList";
import { UserCard } from "./Components/UserCard";
import { Weather } from "./Components/Weather";
function App() {
  const usersObejct = [
    {
      userName: "Vinay",
      email: "vinay@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      userName: "Karan",
      email: "Karna@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      userName: "Anish",
      email: "Anish@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
  ];
  const temprature = [23, 40, 3, 53, 2, 29, 19];
  const tasks = ["Go To Gym", "Go To Shopping", "Go for Run", "Go To Eat"];
  return (
    <>
      <h1>Question-1</h1>
      <p style={{ backgroundColor: "beige" }}>
        1.Create a functional component named Greeting that displays a simple
        "Hello, React!" message on the screen. Import and render the Greeting
        component in the App component.
      </p>
      <Greetings />
      <h1>Question-2</h1>
      <p style={{ backgroundColor: "beige" }}>
        2.Create a functional component named UserCard that accepts the
        following props: name, email, and avatarURL. Use the props to display
        the user's name, email, and an image (avatar) in the UserCard component.
        Create multiple instances of the UserCard component with different user
        data.
      </p>
      <div
        style={{
          border: "2px solid",
          padding: "20px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {usersObejct.map((user, index) => {
          return <UserCard key={index} {...user} />;
        })}
      </div>
      <h1>Question-3</h1>
      <p style={{ backgroundColor: "beige" }}>
        3.Create a functional component named Weather that accepts a prop called
        temperature (a number). Display a message like "It's sunny today!" if
        the temperature is above 25°C and "It's cold today!" if the temperature
        is below 10°C. Import and render the Weather component in the App
        component with different temperature values.
      </p>
      <div>
        {temprature.map((num, index) => {
          return (
            <li>
              <Weather key={index} value={num} />
            </li>
          );
        })}
      </div>
      <h1>Question-4</h1>
      <p style={{ backgroundColor: "beige" }}>
        4.Create a functional component named Counter that displays a count and
        two buttons: "Increment" and "Decrement". Implement event handlers for
        the "Increment" and "Decrement" buttons to increase and decrease the
        count. Display the updated count on the screen.
      </p>
      <div style={{ border: "2px solid", padding: "20px" }}>
        <Counter />
      </div>
      <h1>Question-5</h1>
      <p style={{ backgroundColor: "beige" }}>
        5.Create a functional component named TaskList that accepts an array of
        task names as a prop. Use the map function to render each task name as a
        list item. Import and render the TaskList component in the App component
        with an array of tasks.
      </p>
      <div
        style={{
          border: "2px solid",
          padding: "20px",
          justifyContent: "space-evenly",
        }}
      >
        {tasks.map((task, index) => {
          return <TaskList key={index} value={task} />;
        })}
      </div>
      <h1>Question-6</h1>
      <p style={{ backgroundColor: "beige" }}>
        6.Create a functional component named Button that accepts props for text
        and color. Style the button using inline styles or CSS classes based on
        the color prop. Import and render the Button component in the App
        component with different text and color props.
      </p>
      <div
        style={{
          border: "2px solid",
          padding: "30px",
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button text="Button-1" color="green" />
        <Button text="Button-2" color="blue" />
        <Button text="Button-3" color="yellow" />
        <Button text="Button-4" color="purple" />
        <Button text="Button-5" color="black" />
      </div>
    </>
  );
}

export default App;
