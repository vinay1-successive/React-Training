import { useState } from "react";
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

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      border: "2px solid",
      padding: "20px",
      gap: "10px",
      width: "300px",
    },
    div: { border: "2px solid", padding: "20px" },
  };

  return (
    <>
      <div style={props.styles.div}>{props.value}</div>

      <div style={styles.div}>
        <form style={styles.form} action="">
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

        <h3>Details</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
};

export default PersonForm;
