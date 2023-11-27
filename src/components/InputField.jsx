const InputField = ({ props }) => {
  const { style="", type = "", value = "", fun, name = "", placeholder=""} = props;
  return (
    <>
      <input
        style={style.input}
        type={type}
        value={value}
        onChange={fun}
        required
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
