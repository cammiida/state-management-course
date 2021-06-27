import React from "react";
import { BoardValues } from "../types/board";
import Cell from "./Cell";

type BoardProps = {
  board: BoardValues;
  onCellClick: (rowIdx: number, colIdx: number) => void;
};

const Board: React.FC<BoardProps> = ({ board, onCellClick }: BoardProps) => {
  return (
    <div>
      {board.map((row, rowIdx) => (
        <div style={{ display: "flex" }}>
          {row.map((cellValue, colIdx) => (
            <Cell
              key={`${rowIdx}-${colIdx}`}
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
