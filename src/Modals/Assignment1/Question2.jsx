import UserCard from "./UserCard";

const Question2 = () => {
  const usersObejct = [
    {
      userName: "Vinay",
      email: "vinay@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      userName: "Karan",
      email: "Karna@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      userName: "Anish",
      email: "Anish@gmail.com",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
  ];
  return (
    <>
      <h1>Question-2</h1>
      <p style={{ backgroundColor: "beige" }}>
        2.Create a functional component named UserCard that accepts the
        following props: name, email, and avatarURL. Use the props to display
        the user's name, email, and an image (avatar) in the UserCard component.
        Create multiple instances of the UserCard component with different user
        data.
      </p>
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
