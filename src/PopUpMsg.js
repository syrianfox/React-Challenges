export default function PopUpMsg({
  msg = "your Massege",
  isVisible,
  setIsVisible,
}) {
  function handleClose() {
    setIsVisible(false);
  }
  return (
    <div
      className="popUp"
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <div>{msg}</div>
      <button onClick={handleClose}>DONE</button>
    </div>
  );
}
