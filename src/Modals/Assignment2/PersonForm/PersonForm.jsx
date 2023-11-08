import { useState } from "react";
import { styleAll } from "../../../Helper/Styles";
const PersonForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();

  const fnameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lnameHandler = (e) => {
    setLastName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <div style={props.styles.Ques}>{props.value}</div>

      <div style={styleAll.div}>
        <form style={styleAll.form1} action="">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={fnameHandler}
            type="text"
            placeholder="Enter First Name"
            value={firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={lnameHandler}
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
          />
          <label htmlFor="age">Age</label>
          <input
            onChange={ageHandler}
            type="number"
            placeholder="Enter Age"
            value={age}
          />
        </form>

        <div style={styleAll.div1}>
          <h3>Details</h3>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Age: {age}</p>
        </div>
      </div>
    </>
  );
};

export default PersonForm;
