import { createContext, useContext, useEffect, useState } from "react";
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
  const Items = [
    { id: 1, name: "Bag", price: 200 },
    { id: 2, name: "Shie", price: 400 },
    { id: 3, name: "Iphone", price: 800 },
  ];
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
      <div>
        {Items.map((item, index) => {
          return (
            <div style={styles.div} key={index}>
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

        <div style={styles.div1}>Cart Items:</div>
        {cart?.map((item, index) => {
          return (
            <div style={styles.div} key={index}>
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
        <div>Total: {sum}</div>
      </div>{" "}
    </>
  );
};

export default ShoppingCart;
