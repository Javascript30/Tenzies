import React from "react";
import { v4 as uuidv4 } from "uuid";
import Die from "./components/Die";

function App() {
  const [dices, setDices] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    console.log("Dice state changed!");
    if (
      dices.every((dice) => dice.isHeld) &&
      dices.every((dice) => dice.value === dices[0].value)
    ) {
      setTenzies(!tenzies);
      console.log("You won");
    }
  }, [dices]);

  // Generate new dice array
  function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function allNewDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push({
        value: randomDice(),
        isHeld: false,
        id: uuidv4(),
      });
    }
    return newArray;
  }

  // console.log(allNewDice());

  const diceElements = dices.map((dice) => (
    <Die
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  // Rolling the Dices using the roll btn
  const rollDice = () => {
    setDices((oldDices) =>
      oldDices.map((dice) => {
        return dice.isHeld
          ? dice
          : { ...dice, id: uuidv4(), value: randomDice() };
      })
    );
  };

  // Changing the held boolean value
  const holdDice = (id) => {
    setDices((oldDices) =>
      oldDices.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  };

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dices">{diceElements}</div>

      <button className="roll" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
