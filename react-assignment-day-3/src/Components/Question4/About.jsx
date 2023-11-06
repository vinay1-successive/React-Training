import { userState } from "../../Routing/Routing";
import { useContext } from "react";
import styleAll from "../../handler/Style";
const About = () => {
  const { user } = useContext(userState);
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
