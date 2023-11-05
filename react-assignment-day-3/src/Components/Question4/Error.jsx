import { Link, useNavigate } from "react-router-dom";
import { styleAll } from "../Question";
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button  style={styleAll.label}>
        <Link to="/question4">Go back</Link>
        </button>
      </div>
    </>
  );
};

export default Error;
