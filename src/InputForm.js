import "./style.css";
export default function InputForm({
  label,
  placeholder,
  type = "text",
  style,
  value,
  name,
  min,
  max,
  maxlength,
  onChange,
  checked,
}) {
  return (
    <div className="inputBody" style={style}>
      <label>{label}</label>
      <input
        min={min}
        max={max}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        maxLength={maxlength}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
}
