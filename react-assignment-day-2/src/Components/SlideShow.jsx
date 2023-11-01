import { useEffect, useState } from "react";

const SlideShow = (props) => {
  const [image, setImage] = useState("/images/images-5.jpeg");
  const [count, setCount] = useState(1);
  const [delay, setDelay] = useState(1);
  const [state, setState] = useState(true);
  const styles = {
    div: {
      border: "2px solid",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    img: {
      width: "800px",
      height: "550px",
    },
  };
  useEffect(() => {
    if (state) {
      let id = setInterval(() => {
        setImage(`/images/images-${count}.jpeg`);
        setCount(count >= 5 ? 1 : count + 1);
      }, delay * 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [delay, count, state]);

  return (
    <>
      <div style={props.styles.div}>{props.value}</div>
      <div style={styles.div}>
        <img style={styles.img} src={image} alt="" />
        <div>
          <input
            type="number"
            onChange={(e) => {
              setDelay(e.target.value);
            }}
            value={delay}
          />
          <button onClick={() => setState(!state)}>
            {state ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
