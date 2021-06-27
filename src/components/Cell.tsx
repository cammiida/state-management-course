import { CellValue } from "@material-ui/data-grid";
import React from "react";

type CellProps = {
  value: CellValue;
  onClick: () => void;
};

const Cell: React.FC<CellProps> = ({ value, onClick }: CellProps) => {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        border: "1px solid black",
        backgroundColor: "#FD414D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <b>{value}</b>
    </div>
  );
};

export default Cell;
