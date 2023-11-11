const SubmitButton = ({ props }) => {
  const { style, type = "", fun = null } = props;
  console.log(props);
  return (
    <>
      <button style={style.button} onClick={fun} type={type}>
        Submit
      </button>
    </>
  );
};

export default SubmitButton;
