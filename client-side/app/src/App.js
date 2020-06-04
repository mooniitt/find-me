import React, { useState, useEffect, useRef } from "react";
import { connect } from "dva";
import { TABLE } from "src/constants/thing";
import Table from "@/table";
import Stick from "@/stick";
import Ball from "@/ball";
import Test from "./test.jsx";

import style from "./app.css";

function request() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.zhifuchedao.xyz:3000/api");
  xhr.send(null);
}

function App(props) {
  const [table, setTable] = useState(TABLE);
  const [disappear, setDisappear] = useState(true);
  const [count, setCount] = useState(0);
  const [direct, setDirect] = useState("right");
  useEffect(request, []);

  const screenWith = document.body.offsetWidth;
  const screenHeight = document.body.offsetHeight;

  console.log(screenHeight);

  function delaySetCount(time = 10) {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setPosition(position => {
        let x,
          y,
          direct = position.direct;
        if (direct === "left") {
          x = -20;
        }
        if (direct === "right") {
          x = 20;
          y = 3;
        }

        if (position.x + 15 > screenWith) {
          direct = "left";
        }
        if (position.x - 15 < 0) {
          direct = "right";
        }

        // console.log(position.x);
        return { x: position.x + x, y: position.y + 0, direct };
      });

      // setCount(count => count + 1);
      delaySetCount(time);
    }, time);
    return timer;
  }

  useEffect(() => {
    const timer = delaySetCount();
    return () => clearTimeout(timer);
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0, direct: "right" });

  return (
    <div>
      {/* <button
        onClick={() => {
          // props.dispatch({ type: "table/start" });
          // setTimeout(() => {
          //   props.dispatch({ type: "table/down" });
          // }, 1000);
          setDisappear(!disappear);
        }}
      >
        start
      </button>
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => delaySetCount()}>delay count</button> */}
      {/* <p>{props.data}</p> */}
      {/* {disappear && <Test />} */}
      {/* <Table table={table} /> */}
      {/* <div className={style.content} /> */}
      <Ball position={{ x: position.x, y: position.y }} />
      <div className={style.wrap} />
      {/* <Stick /> */}
    </div>
  );
}

export default connect(({ table }) => ({
  data: table
}))(App);
