import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Table from "@/table";

function request() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.zhifuchedao.xyz:3000/api");
  xhr.send(null);
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="wrap">
      <button
        onClick={() => {
          request();
          setCount(count + 1);
        }}
      >
        测试{count}
      </button>
      <Table />
    </div>
  );
}

export default App;
