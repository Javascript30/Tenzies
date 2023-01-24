export default function Die(props) {
  const heldColor = {
    backgroundColor: props.isHeld ? "var(--green)" : "var(--white)",
    transform: props.isHeld && "skewY(4deg)",
  };
  return (
    <button className="die" style={heldColor} onClick={props.holdDice}>
      {props.die ? props.demDice : props.value}
    </button>
  );
}
