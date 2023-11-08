import { useState } from "react";
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

export default useValidate;
