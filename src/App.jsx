import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Die from "./components/Die";

function App() {
  // Generate new dice array

  const randomDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const allNewDice = () => {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: uuidv4(),
      });
    }
    return newArray;
  };

  console.log(allNewDice());

  const [dices, setDices] = React.useState(allNewDice());

  const diceElements = dices.map((dice) => (
    <Die key={dice.id} value={dice.value} isHeld={dice.isHeld} />
  ));

  const rollDice = () => {
    setDices(allNewDice());
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
