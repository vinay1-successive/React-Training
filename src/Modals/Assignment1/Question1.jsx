import { Greetings } from "./Greetings";

const Question1 = () => {
  return (
    <>
      <h1>Question-1</h1>
      <p style={{ backgroundColor: "beige" }}>
        1.Create a functional component named Greeting that displays a simple
        "Hello, React!" message on the screen. Import and render the Greeting
        component in the App component.
      </p>
      <Greetings />
    </>
  );
};
export default Question1;
