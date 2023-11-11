import { styleAll } from "../../../../helper/Styles";
import DataFetchingComponent from "./DisplayData";
const Question16 = (props) => {
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <DataFetchingComponent/>
      </div>
    </>
  );
};
export default Question16;
