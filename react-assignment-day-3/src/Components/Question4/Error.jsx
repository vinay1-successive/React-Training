import { Link } from "react-router-dom";

import styleAll from "../../handler/Style";
const Error = () => {
  return (
    <>
      <div>
        <button style={styleAll.label}>
          <Link to="/question4">Go back</Link>
        </button>
      </div>
    </>
  );
};

export default Error;
