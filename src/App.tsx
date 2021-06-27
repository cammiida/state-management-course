import React, { useCallback, useState } from "react";
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
  const [games] = useState<[Player, Player][]>([
    [players[0], players[1]],
    [players[0], players[2]],
    [players[1], players[2]],
  ]);

  const handleWin = useCallback((player: Player) => {
    setPlayers((oldPlayers) => {
      const newPlayers = oldPlayers.map((oldPlayer) => ({ ...oldPlayer }));
      const playerIdx = newPlayers.findIndex(
        (newPlayer) => newPlayer.id === player.id
      );
      newPlayers[playerIdx] = {
        ...newPlayers[playerIdx],
        gamesWon: newPlayers[playerIdx].gamesWon + 1,
      };
      return newPlayers;
    });
  }, []);

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
          {games.map((game, idx) => (
            <Game
              key={`${game[0].name}-${game[1].name}`}
              onWin={handleWin}
              opponents={game}
              gameNumber={idx}
            />
          ))}
        </div>
      </div>
      <Leaderboard players={players} />
    </div>
  );
};

export default App;
