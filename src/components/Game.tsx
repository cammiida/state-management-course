import React, { useCallback, useEffect, useState } from "react";
import { Player } from "../types";
import { BoardValues, CellValue, Row } from "../types/board";
import Board from "./Board";

type GameProps = {
  opponents: [Player, Player];
};

const initialBoard: BoardValues = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const Game: React.FC<GameProps> = ({ opponents }) => {
  const [board, setBoard] = useState<BoardValues>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(opponents[0]);
  const [winner, setWinner] = useState<Player>();
  const [turns, setTurns] = useState<number>(0);

  const getPlayerValue = (player: Player): CellValue =>
    player.id === opponents[0].id ? "x" : "o";

  const checkForTicTacToe = useCallback(
    (board: BoardValues) => {
      for (let i = 0; i < 3; i++) {
        const row = board[i];
        const valToCheck = row[0];
        if (row[0] !== "" && row.every((cellVal) => cellVal === row[0])) {
          if (valToCheck === "x") {
            setWinner(opponents[0]);
          } else {
            setWinner(opponents[1]);
          }
          return true;
        }
      }
      return false;
    },
    [opponents]
  );

  const transpose = (board: BoardValues): BoardValues => {
    console.log("transpose");
    let [row] = board;
    return row.map(
      (_value, column) => board.map((row) => row[column]) as Row
    ) as BoardValues;
  };

  useEffect(() => {
    if (turns >= 3) {
      const rowWinner = checkForTicTacToe(board);
      if (!rowWinner) {
        const trasposedBoard = transpose(board);
        checkForTicTacToe(trasposedBoard);
      }
    }
  }, [board, checkForTicTacToe, turns]);

  const handleCellClick = (rowIdx: number, colIdx: number) => {
    if (board[rowIdx][colIdx] !== "" || !!winner) {
      return;
    }
    setTurns((oldVal) => oldVal + 1);
    setBoard((oldBoard) => {
      const newBoard = oldBoard.map((row) => [...row] as Row) as BoardValues;
      newBoard[rowIdx][colIdx] = getPlayerValue(currentPlayer);
      return newBoard;
    });
    setCurrentPlayer((oldPlayer) =>
      oldPlayer.id === opponents[0].id ? opponents[1] : opponents[0]
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>
        {opponents[0].name} vs. {opponents[1].name}
      </div>
      <Board board={board} onCellClick={handleCellClick}></Board>
      {winner && <div>Winner: {winner.name}</div>}
      {turns === 9 && !!!winner && <div>No winner</div>}
    </div>
  );
};

export default Game;
