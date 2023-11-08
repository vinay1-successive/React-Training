import { Link, Outlet, useParams } from "react-router-dom";
import productData from "../../../../MockData/productData";
import { useContext } from "react";
import { userState3 } from "../../../../Routing/Routing3/Index3";
import { styleAll } from "../../../../Helper/Styles";

const Product = () => {
  const { user } = useContext(userState3);
  const { pId } = useParams();
  console.log(pId);
  const valid = /^(1?[1-9]|3)$/.test(pId);
  console.log(valid);
  console.log(user);
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
