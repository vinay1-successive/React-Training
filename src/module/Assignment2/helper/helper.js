const Students = [
  { name: "Vinay", salary: 20000 },
  { name: "Karan", salary: 30000 },
];
const LinksStyle = {
  div: {
    display: "flex",
    flexDirection: "row",

    margin: "30px",
    justifyContent: "space-evenly",
    boxShadow: "2px 2px 4px gray",
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "white",
  },
};
export default LinksStyle;

const stylesPersonForm = {
  form: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid",
    padding: "20px",
    gap: "10px",
    width: "300px",
  },
  div: { border: "2px solid", padding: "20px" },
};

const Items = [
  { id: 1, name: "Bag", price: 200 },
  { id: 2, name: "Shie", price: 400 },
  { id: 3, name: "Iphone", price: 800 },
];

const stylesSlide = {
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

const styles = {
  dark: {
    div: {
      backgroundColor: "Black",
      isplay: "flex",
      flexDirection: "row",
      margin: "30px",
      justifyContent: "center",
      boxShadow: "2px 2px 4px gray",
      alignItems: "center",
      padding: 20,
      borderRadius: 12,
    },
    p: {
      color: "white",
    },
  },
  light: {
    div: {
      backgroundColor: "white",
      isplay: "flex",
      flexDirection: "row",
      margin: "30px",
      justifyContent: "center",
      boxShadow: "2px 2px 4px gray",
      alignItems: "center",
      padding: 20,
      borderRadius: 12,
    },
    p: {
      color: "black",
    },
  },
};

const arr = [
  { task: "Eat", status: false },
  { task: "Sleep", status: false },
  { task: "Walk", status: false },
  { task: "Fight", status: false },
];

export {
  arr,
  styles,
  stylesSlide,
  Items,
  Students,
  stylesPersonForm,
  LinksStyle,
};
