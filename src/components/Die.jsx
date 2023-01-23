export default function Die(props) {
  const heldColor = {
    backgroundColor: props.isHeld ? "var(--green)" : "var(--white)",
  };
  return (
    <button className="die" style={heldColor}>
      {props.value}
    </button>
  );
}
