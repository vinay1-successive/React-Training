import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { styleAll } from "../../../../../helper/Styles";
import productData from "../../../../../mockData/productData";
import { userState3 } from "../../../Assignment3";
const Products = () => {
  const { user } = useContext(userState3);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {user && (
          <>
            <div
              style={styleAll.div}
            >
              {productData.map((item, index) => {
                const link = item.id + "";
                return (
                  <>
                    <Link style={styleAll.link} key={index} to={link}>
                      {item.name}
                    </Link>
                  </>
                );
              })}
            </div>
          </>
        )}

        <Outlet />
      </div>
    </>
  );
};
export default Products;
