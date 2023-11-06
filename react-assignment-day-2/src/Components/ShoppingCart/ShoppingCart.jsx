import { createContext, useContext, useEffect, useState } from "react";
import { Items } from "./ShoppingItems";
import { styleAll } from "../Question";
export const userCart = createContext();
const ShoppingCart = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <userCart.Provider value={{ cart, setCart }}>
        <Cart />
      </userCart.Provider>
    </>
  );
};

const Cart = () => {
  const { cart, setCart } = useContext(userCart);
  const [sum, setSum] = useState(0);
  const styles = {
    div: {
      border: "2px solid",
      display: "flex",
      justifyContent: "space-between",
    },
    p: {
      padding: "20px",
      fontSize: "20px",
    },
    button: {
      fontSize: "20px",
    },
    div1: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
    },
  };
  const handleAddCart = (id) => {
    const data = Items.filter((item) => item.id === id);
    const item = {
      id: new Date().getTime(),
      name: data[0].name,
      price: data[0].price,
    };
    setCart([...cart, item]);
  };
  const handleRemoveCart = (id) => {
    const newArray = cart.filter((item) => item.id !== id);
    console.log(newArray);
    setCart(newArray);
  };

  useEffect(() => {
    setSum(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);
  return (
    <>
      <div style={styleAll.div}>
        <div style={styleAll.div1}>
          {Items.map((item, index) => {
            return (
              <div style={styleAll.div} key={index}>
                <p style={styles.p}>ID:{item.id}</p>
                <p style={styles.p}>Name:{item.name}</p>
                <p style={styles.p}>Price:{item.price}</p>
                <button
                  onClick={() => handleAddCart(item.id)}
                  style={styles.button}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <div style={styles.div1}>Cart Items Total: {sum}</div>
          {cart?.map((item, index) => {
            return (
              <div style={styleAll.div} key={index}>
                <p style={styles.p}>ID:{item.id}</p>
                <p style={styles.p}>Name:{item.name}</p>
                <p style={styles.p}>Price:{item.price}</p>
                <button
                  onClick={() => handleRemoveCart(item.id)}
                  style={styles.button}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
