export const Button = (props) => {
  const { text, color } = props;
  return <button style={{ color: color, fontSize: "20px" }}>{text}</button>;
};
