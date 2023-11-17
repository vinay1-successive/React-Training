const SubmitButton = ({ props }) => {
  const { style, type = "", fun = null, bVal = "" } = props;
  return (
    <>
      <button style={style} onClick={fun} type={type}>
        {bVal ? bVal : "Submit"}
      </button>
    </>
  );
};

export default SubmitButton;
