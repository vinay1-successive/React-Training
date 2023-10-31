const UserCard = (props) => {
  const { userName, email, avatarUrl } = props;
  return (
    <div
      style={{
        border: "2px solid",
        padding: "20px",
        justifyContent: "space-evenly",
      }}
    >
      <p>
        <img src={avatarUrl} alt="" width="200px" height="200px" />{" "}
      </p>
      <p>UserName: {userName}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default UserCard;
