import React from "react";
import { BoardValues } from "../types/board";
import Cell from "./Cell";

type BoardProps = {
  board: BoardValues;
  onCellClick: (rowIdx: number, colIdx: number) => void;
  gameNumber: number;
};

const Board: React.FC<BoardProps> = ({
  board,
  onCellClick,
  gameNumber,
}: BoardProps) => {
  return (
    <div>
      {board.map((row, rowIdx) => (
        <div key={`${gameNumber}-${rowIdx}`} style={{ display: "flex" }}>
          {row.map((cellValue, colIdx) => (
            <Cell
              key={`${gameNumber}-${rowIdx}-${colIdx}`}
              value={cellValue}
              onClick={() => onCellClick(rowIdx, colIdx)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
