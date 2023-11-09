import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import {useValidate} from "../helper/helper";
import { styleAll } from "../../../Helper/Styles";

const Question10 = (props) => {
  const { data, error, handleInput, handleSubmit } = useValidate();
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
      </div>
    </>
  );
};

export default Question10;
