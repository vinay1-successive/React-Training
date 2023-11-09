import React, { Suspense } from "react";
import { styleAll } from "../../../Helper/Styles";
const Component1 = React.lazy(() => import("../helper/Component1"));
const Component2 = React.lazy(() => import("../helper/Component2"));
const Question1 = (props) => {
  if (props.value === "Component1") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component1 />
      </Suspense>
    );
  } else if (props.value === "Component2") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component2 />
      </Suspense>
    );
  } else {
    return <div style={styleAll.div}>Invalid Page</div>;
  }
};
export default Question1;
