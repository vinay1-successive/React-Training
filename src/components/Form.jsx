import { Button, TextField } from "@mui/material";
import { styleAll } from "../helper/Styles";

const Form = ({props}) => {
    console.log(props);
  return (
    <>
      <div>
        <form style={styleAll.form1} onSubmit={props.handleForm}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            onChange={props.handleInput}
            error={props.error.name}
            helperText={props.error.name}
            value={props.data.name}
          />
          <TextField
            label="Email"
            name="email"
            onChange={props.handleInput}
            error={props.error.email}
            helperText={props.error.email}
            value={props.data.email}
          />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Form