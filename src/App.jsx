import React from "react";
import { v4 as uuidv4 } from "uuid";
import Die from "./components/Die";
import Confetti from "react-confetti";

function App() {
  const [dices, setDices] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  // State for realish dices
  const [demdice, setDemDice] = React.useState(false);

  React.useEffect(() => {
    // Check if all the dices are being held and have same value
    if (
      dices.every((dice) => dice.isHeld) &&
      dices.every(
        (dice) =>
          dice.value === dices[0].value ||
          dice.dice.props.children.length ===
            dices[0].dice.props.children.length
      )
    ) {
      setTenzies(!tenzies);
    }
  }, [dices]);

  // Generate new dice array
  function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Random die span generated
  function randomDieFace() {
    switch (Math.ceil(Math.random() * 6)) {
      case 1:
        return <span></span>;
      // break;
      case 2:
        return (
          <>
            <span></span>
            <span></span>
          </>
        );
      // break;
      case 3:
        return (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        );
      // break;
      case 4:
        return (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        );
      // break;
      case 5:
        return (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        );
      // break;
      case 6:
        return (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        );
      // break;
      default:
        break;
    }
  }

  function allNewDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push({
        value: randomDice(),
        dice: randomDieFace(),
        isHeld: false,
        id: uuidv4(),
      });
    }
    return newArray;
  }

  const diceElements = dices.map((dice) => (
    <Die
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
      die={demdice}
      demDice={dice.dice}
    />
  ));

  // Rolling the Dices using the roll btn
  const rollDice = () => {
    if (tenzies) {
      setTenzies(!tenzies);
      setDices(allNewDice());
    } else {
      setDices((oldDices) =>
        oldDices.map((dice) => {
          return dice.isHeld
            ? dice
            : {
                ...dice,
                id: uuidv4(),
                value: randomDice(),
                dice: randomDieFace(),
              };
        })
      );
    }
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
      {tenzies && <Confetti />
      // && (
      //   <audio autoPlay>
      //     {" "}
      //     <source src="./assets/win.mp3" type="audio/mp3" />
      //   </audio>
      // )
      }
      <h1>Tenzies</h1>
      <p>
        {tenzies
          ? "You've won 👏🏾. Roll to start a new game !!"
          : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
      </p>
      <div className="dices">{diceElements}</div>

      <button className="roll" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
