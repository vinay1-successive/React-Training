import { useContext } from "react";
import { userState } from "../../Routing/Routing";
import styleAll from "../../handler/Style";

const Home = () => {
  const { user } = useContext(userState);
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
