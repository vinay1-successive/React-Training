import { styleAll } from "../../../../helper/Styles";
import withDataFetching from "./WithDataFetching";
const DisplayData = (props) => {
  const data = props.data;
  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        {data.map((item, index) => (
          <div style={styleAll.div} key={index}>
            <p>name: {item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const DataFetchingComponent = withDataFetching(
  "https://jsonplaceholder.typicode.com/users"
)(DisplayData);

export default DataFetchingComponent;
