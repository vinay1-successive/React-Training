import Counter from "./Counter";

const Question4 = () => {
  return (
    <>
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
    </>
  );
};

export default Question4;
