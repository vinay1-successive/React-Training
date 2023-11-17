import withLogger from "./WithLogger";
const DisplayData = (props) => {
  const { data, setState } = props.value;
  return (
    <>
      <div>
        <button onClick={() => setState(false)}>UnMount</button>
        {
          data.map((item,index)=>
          {
            return <li key={index}>{item.name}</li>
          })
        }
      </div>
    </>
  );
};

const DataFetchingComponent = withLogger(DisplayData);

export default DataFetchingComponent;
