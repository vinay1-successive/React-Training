import QuestionData from "../../../components/QuestionData";
import { UserCard, usersObejct } from "../helper/helper";
const Question2 = () => {
  return (
    <>
      <h1>Question-2</h1>
      <QuestionData
        value={
          "2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL. Use the props to display the user's name, email, and an image (avatar) in the UserCard component. Create multiple instances of the UserCard component with different user data."
        }
      />
      <div
        style={{
          border: "2px solid",
          padding: "20px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {usersObejct.map((user, index) => {
          return <UserCard key={index} {...user} />;
        })}
      </div>
    </>
  );
};
export default Question2;
