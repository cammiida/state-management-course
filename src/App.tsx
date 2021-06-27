import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { Player } from "./types";

const initialPlayers: Player[] = [
  { id: 1, name: "Carl", gamesWon: 0 },
  { id: 2, name: "Jane", gamesWon: 0 },
  { id: 3, name: "Sophie", gamesWon: 0 },
];

const App = () => {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [games, setGames] = useState();

  const handleWin = (player: Player) => {};

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          The Terrific Tic Tac Toe Tournament
        </h1>
        <div style={{ display: "flex", gap: "40px" }}>
          <Game opponents={[players[0], players[1]]} />
          <Game opponents={[players[0], players[2]]} />
          <Game opponents={[players[1], players[2]]} />
        </div>
      </div>
      <Leaderboard players={players} />
    </div>
  );
};

export default App;
