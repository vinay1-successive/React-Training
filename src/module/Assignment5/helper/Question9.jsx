import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "./Query";
import { styleAll } from "../../../helper/Styles";
const Question9 = () => {
  const { data, loading, error } = useQuery(GET_ALL_FILMS, {
    variables: {
      after: "1",
      before: "10",
    },
  });
  const arr=data?.allFilms?.films[0]?.characterConnection?.characters;
  console.log(arr);
  console.log(data?.allFilms?.films[0]?.characterConnection?.characters, loading, error);
  return (
    <>
      <div style={styleAll.div1}>
        {arr?.map((item, index) => {
          return (
            <div style={styleAll.div}  key={index}>{item.name}</div>
          );
        })}
      </div>
    </>
  );
};
export default Question9;
