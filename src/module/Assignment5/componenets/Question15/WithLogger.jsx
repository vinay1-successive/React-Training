import { useEffect, useState } from "react";

const withLogger = (WrappedComponent) => {
  return function useMountUnount(props) {
    const [data, setdata] = useState([]);
    const [state, setState] = useState(true);

    useEffect(() => {
      console.log("Component Mounted");

      getData();

      return () => {
        console.log("Component Unmounted");
      };
    }, [state]);
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Invalid Response");
        }
        const data = await response.json();
        setdata(data);
      } catch (error) {
        alert(error);
      }
    };

    useEffect(() => {
      console.log("Component Updated");
    }, [data]);

    if (state) {
      return <WrappedComponent value={{ data, setState }} />;
    }
    return null;
  };
};

export default withLogger;
