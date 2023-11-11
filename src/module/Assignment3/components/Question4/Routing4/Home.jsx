import { useContext } from "react";
import { styleAll } from "../../../../../helper/Styles";
import { userState3 } from "../../../Assignment3";

const Home = () => {
  const { user } = useContext(userState3);
  return (
    <>
      <div>
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
