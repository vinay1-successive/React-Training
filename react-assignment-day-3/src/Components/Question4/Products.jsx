import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { userState } from "../Questions";
import Product from "./Product";
import productData from "./Data";
import { styleAll } from "../Question";
import Error from "../Error";
const Products = () => {
  const { user, setUser } = useContext(userState);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {user && (
          <>
            <div
              style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              }}
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
        <Routes>
          {}
          <Route path=":pId" element={<Product value={productData} />} />
        </Routes>
        <Outlet />
      </div>
    </>
  );
};
export default Products;
