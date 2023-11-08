import { useEffect, useState } from "react";
import { stylesSlide } from "./SlideShow";
import { styleAll } from "../../../Helper/Styles";
const SlideShow = (props) => {
  const [image, setImage] = useState("/Images/images1.jpeg");
  const [count, setCount] = useState(1);
  const [delay, setDelay] = useState(1);
  const [state, setState] = useState(true);

  useEffect(() => {
    if (state) {
      let id = setInterval(() => {
        setImage(`/Images/images${count}.jpeg`);
        setCount(count >= 5 ? 1 : count + 1);
      }, delay * 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [delay, count, state]);

  return (
    <>
      <div style={props.styles.Ques}>{props.value}</div>
      <div>
        <img style={stylesSlide.img} src={image} alt="" />
        <div style={styleAll.form}>
          <input
            style={styleAll.input}
            type="number"
            onChange={(e) => {
              setDelay(e.target.value);
            }}
            value={delay}
          />
          <button style={styleAll.button} onClick={() => setState(!state)}>
            {state ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
