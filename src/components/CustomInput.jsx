const CustomInput = ({
  label,
  title,
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className="form">
      <label htmlFor={label}>{title}</label>
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
