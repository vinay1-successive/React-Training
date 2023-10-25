export const Weather = (props) => {
  return (
    <>
      {props.value > 25 && "It is Sunny Today!"}
      {props.value < 10 && "It is Cold Today!"}
      {props.value > 10 && props.value < 25 && "It is Normal Today!"}
    </>
  );
};
