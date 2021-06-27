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
        backgroundColor: "beige",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Cell;
