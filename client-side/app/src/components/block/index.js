import React from "react";
import styles from "./style.css";

function Block({ isRigid }) {
  return isRigid ? (
    <div className={`${styles.rigid} ${styles["inline-block"]}`}></div>
  ) : (
    <div className={`${styles.empty} ${styles["inline-block"]}`}></div>
  );
}

export default Block;
