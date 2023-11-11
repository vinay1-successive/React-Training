import { useContext } from "react";
import { userContext } from "./Routing/Routing"
import Login from "./Login";

const WithAuth = (WrappedComponent) => {
  const { user } = useContext(userContext);
  if (user) {
    return <WrappedComponent />;
  }
  return <>{!user && <Login />}</>;
};
export default WithAuth;
