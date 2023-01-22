import Die from "./components/Die";

function App() {
  return (
    <main>
      <h1>Tenzies</h1>
      <p className="main__text">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dices">
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
        <Die value="2" />
      </div>

      <button className="roll">Roll</button>
    </main>
  );
}

export default App;
