import React from "react";
import { Player } from "../types";

type PlayerDetailProps = { player: Player };

const PlayerDetail: React.FC<PlayerDetailProps> = ({
  player,
}: PlayerDetailProps) => {
  return (
    <div style={{ textAlign: "left" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <b>Name:</b> {player.name}
        </li>
        <li>
          <b>Games won:</b> {player.gamesWon}
        </li>
      </ul>
    </div>
  );
};

export default PlayerDetail;
