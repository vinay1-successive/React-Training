import { useEffect, useState } from "react";

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
export default UserValidate;
