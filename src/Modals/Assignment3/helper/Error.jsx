import { Link } from "react-router-dom";

const Error = () => {
  console.log("Out err0r");
  return (
    <>
      <div>
        <button>
          <Link to="/Assignment3/question1">Go back</Link>
        </button>
      </div>
    </>
  );
};
export default Error;
