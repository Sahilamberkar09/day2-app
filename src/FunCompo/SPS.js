import React, { useState } from "react";

const SPS = () => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handlePlayerOne = (e) => {
    const choice = e.target.value.toLowerCase();
    setPlayerOne(choice);
  };
  const handlePlayerTwo = (e) => {
    const choice = e.target.value.toLowerCase();
    setPlayerTwo(choice);
  };

  const validateChoices = (setPlayerOne, setPlayerTwo) => {
    const validChoice = ["rock", "paper", "scissors"];
    if (!validChoice.includes(setPlayerOne)) {
      setError("Player One Must choice between Rock, Paper, Scissors");
      return false;
    }
    if (!validChoice.includes(setPlayerTwo)) {
      setError("Player One Must choice between Rock, Paper, Scissors");
      return false;
    }
    if (
      !validChoice.includes(setPlayerOne) ||
      !validChoice.includes(setPlayerTwo)
    ) {
      setError("Both Players must choose between Rock, Paper, Scissors");
      return false;
    }

    setError("");
    return true;
  };

  const Winner = (playerOne, playerTwo) => {
    if (playerOne === playerTwo) return "Its a draw";

    if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "paper" && playerTwo === "rock") ||
      (playerOne === "scissors" && playerTwo === "paper")
    ) {
      return "Player 1 Wins";
    }
    return "Player 2 Wins";
  };

  const GameStart = () => {
    if (playerOne && playerTwo && validateChoices(playerOne, playerTwo)) {
      setResult(Winner(playerOne, playerTwo));
    }
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <h1>Rock, Paper, Scissors Game</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            value={playerOne}
            onChange={handlePlayerOne}
            name="playerOne"
          />

          <input
            type="text"
            value={playerTwo}
            onChange={handlePlayerTwo}
            name="playerTwo"
          />
          <button onClick={GameStart}>Play</button>
        </div>
        <div>
          <h3>Player 1 Choice: {playerOne}</h3>
          <h3>Player 2 Choice: {playerTwo}</h3>
        </div>

        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        {result && <h2 style={{ color: "green" }}>{result}</h2>}
      </div>
    </>
  );
};

export default SPS;
