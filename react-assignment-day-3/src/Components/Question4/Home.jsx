import { useContext } from "react";
import { Link } from "react-router-dom";
import { userState } from  "../Questions"
import { styleAll } from "../Question";

const Home = () => {
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
            <div style={styleAll.div}>Home Page</div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
