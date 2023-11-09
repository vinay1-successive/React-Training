import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

const UserValidate = () => {
  const [data, setData] = useState({ name: "", password1: "", password2: "" });
  const [state, setState] = useState(true);

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: data.name,
      password1: data.password1,
      password2: data.password2,
    };
    console.log(newData);
  };
  useEffect(() => {
    setState(
      data.password1 === data.password2 && data.password1 !== "" ? false : true
    );
  }, [data.password1, data.password2]);

  return { data, state, handleData, handleSubmit };
};

const Sidebar = ({ open, close }) => {
  return (
    <>
      <div>
        <Drawer anchor="left" open={open} close={close}>
          <List>
            <ListItem component={Link} to="/question1" onClick={close}>
              <ListItemText primary="Question1" />
            </ListItem>
            <ListItem component={Link} to="/question2" onClick={close}>
              <ListItemText primary="Question2" />
            </ListItem>
            <ListItem component={Link} to="/question3" onClick={close}>
              <ListItemText primary="Question3" />
            </ListItem>
            <ListItem component={Link} to="/question4" onClick={close}>
              <ListItemText primary="Question4" />
            </ListItem>
            <ListItem component={Link} to="/question5" onClick={close}>
              <ListItemText primary="Question5" />
            </ListItem>
            <ListItem component={Link} to="/question6" onClick={close}>
              <ListItemText primary="Question6" />
            </ListItem>
            <ListItem component={Link} to="/question7" onClick={close}>
              <ListItemText primary="Question7" />
            </ListItem>
            <ListItem component={Link} to="/question8" onClick={close}>
              <ListItemText primary="Question8" />
            </ListItem>
            <ListItem component={Link} to="/question9" onClick={close}>
              <ListItemText primary="Question9" />
            </ListItem>
            <ListItem component={Link} to="/question10" onClick={close}>
              <ListItemText primary="Question10" />
            </ListItem>
            <ListItem component={Link} to="/question11" onClick={close}>
              <ListItemText primary="Question11" />
            </ListItem>
            <ListItem component={Link} to="/question12" onClick={close}>
              <ListItemText primary="Question12" />
            </ListItem>
            <ListItem component={Link} to="/question13" onClick={close}>
              <ListItemText primary="Question13" />
            </ListItem>
            <ListItem component={Link} to="/question14" onClick={close}>
              <ListItemText primary="Question14" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};

const useValidate = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    const newErr = {};
    if (data.name.trim() === "") {
      newErr.name = "Name is Required";
    } else if (!/^([a-zA-Z ]){2,30}$/.test(data.name.trim())) {
      newErr.name = "Invalid is Name";
    }
    if (data.email === "") {
      newErr.email = "Email is Required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    ) {
      newErr.email = "Invalid Email";
    }
    setError(newErr);

    if (Object.keys(newErr).length === 0) {
      return true;
    }
  };
  return { data, error, handleInput, handleSubmit };
};
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Validation = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Name is required").min(6).max(10),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    phone: yup.number().required("Phone no is requird"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  return { formik };
};

const useValidate14 = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const [summ, setSumm] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    const newErr = {};
    if (data.name.trim() === "") {
      newErr.name = "Name is Required";
    } else if (!/^([a-zA-Z ]){2,30}$/.test(data.name.trim())) {
      newErr.name = "Invalid is Name";
    }
    if (data.email === "") {
      newErr.email = "Email is Required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    ) {
      newErr.email = "Invalid Email";
    }
    setError(newErr);

    if (Object.keys(newErr).length === 0) {
      return true;
    }
    setSumm([...summ, newErr.email || newErr.name]);
  };
  return { data, error, handleInput, handleSubmit, summ };
};

export {
  UserValidate,
  Sidebar,
  useValidate,
  rows,
  columns,
  Validation,
  useValidate14,
};
