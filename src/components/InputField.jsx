const InputField = ({ props }) => {
  const { style, type = "", value = "", fun, name = "" } = props;
  return (
    <>
      <input
        style={style.input}
        type={type}
        value={value}
        onChange={fun}
        required
        name={name}
      />
    </>
  );
};

export default InputField;
