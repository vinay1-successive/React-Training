import * as yup from "yup";
import { useFormik } from "formik";
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

export default Validation;
