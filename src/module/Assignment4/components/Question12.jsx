import { styleAll } from "../../../helper/Styles";
import * as React from "react";
import { columns, rows } from "../../../mockData/userData";
import BoxPagination from "../../../components/BoxPagination";

const Question12 = (props) => {
  return (
    <div>
      <div style={styleAll.Ques}>{props.value}</div>
      <BoxPagination props={{ rows, columns }} />
    </div>
  );
};
export default Question12;
