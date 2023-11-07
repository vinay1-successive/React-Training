import UserValidate from "./UserValidate";

const Question4 = (props) => {
  const { data, handleData, state, handleSubmit } = UserValidate();
  return (
    <>
      <div style={props.style.div}>
        <div style={props.style.Ques}>{props.value}</div>
        <form style={props.style.form} onSubmit={handleSubmit}>
          <div>
            <label style={props.style.label} htmlFor="name">
              Name:{" "}
            </label>
            <input
              style={props.style.input}
              onChange={handleData}
              type="text"
              name="name"
              value={data.name}
            />
          </div>
          <div>
            <label style={props.style.label} htmlFor="password1">
              Enter password:{" "}
            </label>
            <input
              style={props.style.input}
              value={data.password1}
              onChange={handleData}
              type="password"
              name="password1"
            />
          </div>
          <div>
            <label style={props.style.label} htmlFor="password2">
              confirm password:{" "}
            </label>
            <input
              style={props.style.input}
              value={data.password2}
              onChange={handleData}
              type="password"
              name="password2"
            />
          </div>
          <button style={props.style.button} disabled={state} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Question4;
