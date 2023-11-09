import { useState } from "react";

const Question2 = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState();
  const [consent, setConsent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: name,
      gender: gender,
      consent: consent,
    };
    console.log(newData);
  };

  return (
    <>
      <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
        <form style={props.style.div}>
          <div>
            <label style={props.style.label} htmlFor="name">
              Name :
            </label>
            <input
              style={props.style.input}
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <fieldset style={{ justifyContent: "space-evenly", display: "flex" }}>
            <legend>Gender</legend>

            <div>
              <input
                style={props.style.input}
                type="radio"
                id="male"
                name="gender"
                value={gender}
                onChange={() => setGender("Male")}
              />
              <label style={props.style.label} for="male">
                Male
              </label>
            </div>

            <div>
              <input
                style={props.style.input}
                type="radio"
                value={gender}
                onChange={() => setGender("Female")}
                id="female"
                name="gender"
              />
              <label style={props.style.label} for="female">
                Female
              </label>
            </div>
          </fieldset>

          <label style={props.style.label} htmlFor="agree">
            Are you agree with all the terms
          </label>
          <input
            style={props.style.input}
            type="checkbox"
            onClick={(e) => setConsent(!consent)}
            name="agree"
            id=""
            checked={consent}
          />
          <button
            style={props.style.button}
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Question2;
