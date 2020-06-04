import React, { useEffect, useState } from "react";
import style from "./style.css";

function Stick() {
  useEffect(() => {
    window.addEventListener("mousemove", e => {
      console.log(e);
      const screenWith = document.body.offsetWidth;
      let left = e.screenX - 50;
      if (e.screenX - 50 <= 0) {
        left = 0;
      } else if (e.screenX + 50 >= screenWith) {
        left = screenWith - 100;
      }
      setLeft(left);
    });
  }, []);

  const [left, setLeft] = useState(0);

  return (
    <div className={style.wrap} style={{ left }}>
      {/* <p className={style.tag}>1</p> */}
    </div>
  );
}

export default Stick;
