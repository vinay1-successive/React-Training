import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "./Query";
const Question8 = () => {
  const { data, loading, error } = useQuery(GET_ALL_FILMS, {
    variables: {
      after: "1",
      before: "10",
    },
  });
  console.log(data?.allFilms, loading, error);
  return (
    <>
      <div>Hi</div>
    </>
  );
};
export default Question8;
