export default function Header(prop) {
  return (
    <>
      <h3
        style={{
          color: "#ff6a3d",
          marginBottom: "0px",
          fontFamily: "Cambria",
          fontSize: "30px",
        }}
      >
        {prop.title}
      </h3>
    </>
  );
}
