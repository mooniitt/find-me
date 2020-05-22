import React, { useState } from "react";
import Block from "@/block";
import LineBlock from "@/line-block";
import styles from "./style.css";

function Table({ table }) {
  return (
    <div className={styles.table}>
      {table.map((row, index) => {
        return <LineBlock key={String(index)} row={row} />;
      })}
    </div>
  );
}

export default Table;
