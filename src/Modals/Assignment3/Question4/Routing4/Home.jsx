import { useContext } from "react";
import { styleAll } from "../../../../Helper/Styles";
import { userState3 } from "../../../../Routing/Routing3/Index3";

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
