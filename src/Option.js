import "./style.css";
export default function Option({
  defaultValue,
  toLabel,
  label,
  name,
  value,
  children,
  onChange,
}) {
  return (
    <div className="option">
      <label htmlFor={toLabel}>{label}</label>
      <select onChange={onChange} name={name} defaultValue={defaultValue}>
        {children}
      </select>
    </div>
  );
}
