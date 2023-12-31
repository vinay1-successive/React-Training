import { Link, Outlet, useParams } from "react-router-dom";
import productData from "../../../../../mockData/productData";
import { useContext } from "react";
import { userState3 } from "../../../Assignment3";
import { styleAll } from "../../../../../helper/Styles";

const Product = () => {
  const { user } = useContext(userState3);
  const { pId } = useParams();
  const valid = /^(1?[1-9]|3)$/.test(pId);
  let data;
  if (valid) {
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
