import React, { useState } from "react";

const SPS = () => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [playerOneWins, setPlayerOneWins] = useState(0);
  const [playerTwoWins, setPlayerTwoWins] = useState(0);

  const validChoices = ["rock", "paper", "scissors"];

  const handlePlayerChoice = (setPlayer, e) => {
    setPlayer(e.target.value.toLowerCase());
  };

  const validateChoices = (choice1, choice2) => {
    if (!validChoices.includes(choice1) || !validChoices.includes(choice2)) {
      setError("Both players must choose between Rock, Paper, or Scissors.");
      return false;
    }
    setError("");
    return true;
  };

  const determineWinner = (p1, p2) => {
    if (p1 === p2) return "It's a draw!";

    if (
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "paper" && p2 === "rock") ||
      (p1 === "scissors" && p2 === "paper")
    ) {
      setPlayerOneWins((prev) => prev + 1);
      return "Player 1 Wins!";
    }

    setPlayerTwoWins((prev) => prev + 1);
    return "Player 2 Wins!";
  };

  const resetGame = () => {
    setPlayerOne("");
    setPlayerTwo("");
    setResult("");
    setError("");
    setFinalResult("");
    setPlayerOneWins(0);
    setPlayerTwoWins(0);
  };

  const determineGameWinner = (p1Wins, p2Wins) => {
    if (p1Wins >= 3) {
      setTimeout(resetGame, 2000);
      return "Player 1 is the final winner!";
    }
    if (p2Wins >= 3) {
      setTimeout(resetGame, 2000);
      return "Player 2 is the final winner!";
    }
    return "";
  };

  const GameStart = () => {
    if (playerOne && playerTwo && validateChoices(playerOne, playerTwo)) {
      const roundResult = determineWinner(playerOne, playerTwo);
      setResult(roundResult);
      setFinalResult(
        determineGameWinner(
          playerOneWins + (roundResult.includes("Player 1") ? 1 : 0),
          playerTwoWins + (roundResult.includes("Player 2") ? 1 : 0)
        )
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <div
        style={{
          padding: "2rem",
          borderRadius: 25,
          backgroundColor: "#f4f4f4",
          textAlign: "center",
        }}>
        <h1>Rock, Paper, Scissors Game</h1>
        {finalResult && <h2 style={{ color: "blue" }}>{finalResult}</h2>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "1rem",
          }}>
          <h3>
            Player 1 Wins:{" "}
            <span style={{ color: "green" }}>{playerOneWins}</span>
          </h3>
          <h3>
            Player 2 Wins:{" "}
            <span style={{ color: "green" }}>{playerTwoWins}</span>
          </h3>
        </div>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        {result && <h2 style={{ color: "green" }}>{result}</h2>}
        <input
          type="text"
          value={playerOne}
          onChange={(e) => handlePlayerChoice(setPlayerOne, e)}
          placeholder="Player 1 Enter Choice"
          style={{ marginBottom: "10px", padding: "10px", width: "80%" }}
        />
        <input
          type="text"
          value={playerTwo}
          onChange={(e) => handlePlayerChoice(setPlayerTwo, e)}
          placeholder="Player 2 Enter Choice"
          style={{ marginBottom: "10px", padding: "10px", width: "80%" }}
        />
        <button
          onClick={GameStart}
          style={{
            padding: "10px 20px",
            background: "green",
            color: "white",
            borderRadius: "25px",
            border: "none",
            fontWeight: 600,
          }}>
          Play
        </button>
        <div>
          <h3>Player 1 Choice: {playerOne}</h3>
          <h3>Player 2 Choice: {playerTwo}</h3>
        </div>
      </div>
    </div>
  );
};

export default SPS;
