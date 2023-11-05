import { Link, Outlet, useParams } from "react-router-dom";
import productData from "./Data";
import { useContext } from "react";
import { userState } from "../Questions";
import { styleAll } from "../Question";

const Product = () => {
  const { user, setUser } = useContext(userState);
  const { pId } = useParams();
  console.log(pId);
  const valid = /^(1?[1-9]|3)$/.test(pId);
  console.log(valid);
  console.log(user);
  let data;
  if (!valid) {
    data = productData[pId - 1];
  }

  return (
    <>
      {user && (
        <>
          {valid && user ? (
            <div style={styleAll.div1}>
              <p>Id: {data?.id}</p>
              <p>Name: {data?.name}</p>
              <p>Price: {data?.price}</p>
              <button>
                <Link to="products">Go Back</Link>
              </button>
            </div>
          ) : (
            <Link to="/question4">Go Back</Link>
          )}

          <Outlet />
        </>
      )}
    </>
  );
};
export default Product;
