import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Die from "./components/Die";

function App() {
  // Generate new dice array
  const allNewDice = () => {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(Math.floor(Math.random() * 6) + 1);
    }
    // const newArrayWithIDs = newArray.map((item, index) => ({
    //   ...item,
    //   id: index,
    // }));
    return newArray;
  };

  const [dices, setDices] = React.useState(allNewDice());

  const diceElements = dices.map((dice) => <Die key={uuidv4()} value={dice} />);

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
