import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userState } from "../../Routing/Routing";
import productData from "../../MockData/productData";
import styleAll from "../../handler/Style";
const Products = () => {
  const { user } = useContext(userState);
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

        <Outlet />
      </div>
    </>
  );
};
export default Products;
