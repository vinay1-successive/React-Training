import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import { styleAll } from "../Data";
import useValidate from "./UseValidate";

const Question14 = (props) => {
  const { data, error, handleInput, handleSubmit, summ } = useValidate();
  console.log(summ);
  const handleForm = (e) => {
    e.preventDefault();
    const check = handleSubmit();
    if (check) {
      alert(data.name + " " + data.email);
    }
  };
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <form style={styleAll.form1} onSubmit={handleForm}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            onChange={handleInput}
            error={error.name}
            helperText={error.name}
            value={data.name}
          />
          <TextField
            label="Email"
            name="email"
            onChange={handleInput}
            error={error.email}
            helperText={error.email}
            value={data.email}
          />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
        {summ.map((item) => {
          return <li>{item}</li>;
        })}
      </div>
    </>
  );
};

export default Question14;
