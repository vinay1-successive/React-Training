import { Link, Outlet } from "react-router-dom";

import productData from "./Data";
import { useContext } from "react";
import { userState } from "./Question4";
const Products = () => {
  const { user, setUser } = useContext(userState);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        {user ? (
          <>
            <Link onClick={() => setUser(false)} to="/">
              Log out
            </Link>
            <Link to="/products">Products</Link>
            <div
              style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              }}
            >
              {productData.map((item, index) => {
                const link = `/products/${item.id}`;
                console.log(link);
                return (
                  <>
                    <Link key={index} to={link}>
                      {item.name}
                    </Link>
                    <Outlet />
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </>
  );
};
export default Products;
