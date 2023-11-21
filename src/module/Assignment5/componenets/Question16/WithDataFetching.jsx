import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetching = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
        } else {
          throw new Error("Invalid Response");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

const withDataFetching = (url) => (WrappedComponent) => (props) => {
  const { data } = useDataFetching(url);

  return <WrappedComponent data={data} {...props} />;
};

export default withDataFetching;
