import React, { useState } from "react";
import Block from "@/block";
import LineBlock from "@/line-block";
import { TABLE } from "src/constants/thing";

function Table(props = {}) {
  return (
    <div>
      {TABLE.map((row, index) => {
        return <LineBlock key={String(index)} row={row} />;
      })}
    </div>
  );
}

export default Table;
