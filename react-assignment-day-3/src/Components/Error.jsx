import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  console.log("Out err0r");
  return (
    <>
      <div>
        <button ><Link to="/question1">Go back</Link></button>
      </div>

    </>
  );
};
export default Error;
