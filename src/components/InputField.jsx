const InputField = ({ props }) => {
  const { style, type = "", value = "", fun, name = "" } = props;
  console.log(props);
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
