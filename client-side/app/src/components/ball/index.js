import React from "react";
import style from "./style.css";

function Ball({ position }) {
  return (
    <div className={style.wrap} style={{ left: position.x, top: position.y }} />
  );
}

export default Ball;
