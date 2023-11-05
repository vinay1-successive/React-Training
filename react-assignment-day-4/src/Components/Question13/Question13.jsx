import { Button, FormControl, FormGroup, TextField } from "@mui/material";

import { styleAll } from "../Data";
import Validation from "./Validation";
const Question13 = (props) => {
  const { formik } = Validation();
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <div>
      <div style={styleAll.Ques}>{props.value}</div>
      <form onSubmit={handleSubmit}>
        <FormGroup onSubmit={handleSubmit}>
          <FormControl margin="normal">
            <TextField
              label="Username"
              variant="outlined"
              style={{ width: "50%" }}
              value={formik.values.username}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              {...formik.getFieldProps("username")}
            />
          </FormControl>
          <FormControl margin="normal">
            <TextField
              label="Password"
              variant="outlined"
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps("password")}
              style={{ width: "50%" }}
            />
          </FormControl>
          <FormControl margin="normal">
            <TextField
              label="Phone"
              variant="outlined"
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              {...formik.getFieldProps("phone")}
              style={{ width: "50%" }}
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default Question13;
