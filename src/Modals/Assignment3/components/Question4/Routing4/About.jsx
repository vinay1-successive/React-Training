import { styleAll } from "../../../../../Helper/Styles";
import { useContext } from "react";
import { userState3 } from "../../../Assignment3";
const About = () => {
  const { user } = useContext(userState3);
  return (
    <>
      <div>
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
