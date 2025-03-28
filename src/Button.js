export default function Button({ onClick, disabled }) {
  return (
    <div className="btn">
      <button type="submit" onClick={onClick} disabled={disabled}>
        SUBMIT
      </button>
    </div>
  );
}
