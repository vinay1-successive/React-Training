import { styleAll } from "../../../helper/Styles";
import Button from "../helper/Button";

const Question12 = (props) => {
  const handleClick = () => {
    alert("Button is Clicked");
  };
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <Button
          style={{ color: "gray", text: "black" }}
          onClick={handleClick}
          text="Click"
        />
      </div>
    </>
  );
};
export default Question12;
