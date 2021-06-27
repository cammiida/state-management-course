import React from "react";
import { Player } from "../types";
import PlayerDetail from "./PlayerDetail";

type LeaderboardProps = {
  players: Player[];
};

const Leaderboard: React.FC<LeaderboardProps> = ({
  players,
}: LeaderboardProps) => {
  return (
    <div
      style={{
        marginLeft: "auto",
        padding: "0 50px",
        borderLeft: "1px solid black",
        backgroundColor: "bisque",
      }}
    >
      <h2>Leaderboard</h2>
      {players
        .sort((a, b) => b.gamesWon - a.gamesWon)
        .map((player) => (
          <PlayerDetail player={player} />
        ))}
    </div>
  );
};

export default Leaderboard;
