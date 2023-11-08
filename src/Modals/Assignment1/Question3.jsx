import Weather from "./Weather";

const Question3 = () => {
  const temprature = [23, 40, 3, 53, 2, 29, "abc"];
  return (
    <>
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
    </>
  );
};

export default Question3;
