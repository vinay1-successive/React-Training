import { styleAll } from "../../../Helper/Styles";

const Question5 = (props) => {
  const { name, email, phone } = props.value;
  return (
    <>
      <div style={styleAll.div1}>
        <p>{name}</p>
        <p>{email}</p>
        <p> {phone}</p>
      </div>
    </>
  );
};

export default Question5;
