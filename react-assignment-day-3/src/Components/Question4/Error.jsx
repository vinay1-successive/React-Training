import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate("/")}>Error Page</div>
    </>
  );
};

export default Error;
