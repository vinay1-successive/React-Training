import { Link } from "react-router-dom";

import { userState } from "../Questions";
import { useContext } from "react";
import { styleAll } from "../Question";
const About = () => {
  const { user, setUser } = useContext(userState);
  return (
    <>
      <div
        style={{
          justifyContent: "space-evenly",
          display: "flex",
          width: "500px",
          flexDirection: "column",
        }}
      >
        {user && (
          <>
            <div style={styleAll.div}>About Page</div>
          </>
        )}
      </div>
    </>
  );
};

export default About;
