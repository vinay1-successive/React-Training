import { Link, Outlet, useParams } from "react-router-dom";
import productData from "./Data";
import { useContext } from "react";
import { userState } from "./Question4";

const Product = () => {
  const { user } = useContext(userState);
  const { pId } = useParams();
  const data = productData[pId - 1];
  console.log("dd" + data);
  return (
    <>
      {user ? (
        <>
          <div>
            <p>Id: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Price: {data.price}</p>
            <button>
              <Link to="/products">Go Back</Link>
            </button>
          </div>
          <Outlet />
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </>
  );
};
export default Product;
