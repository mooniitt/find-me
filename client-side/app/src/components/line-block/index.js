import React from "react";
import Block from "@/block";

import styles from "./style.css";

export default function LineBlock({ row }) {
  return (
    <div className={styles.wrap}>
      {row.map((isRigid, index) => (
        <Block key={String(index)} isRigid={isRigid} />
      ))}
    </div>
  );
}
