import React from "react";
import logo from "./logo.svg";
import "./App.css";

function request() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.zhifuchedao.xyz:3000/");
  xhr.send(null);
}

function App() {
  return (
    <div className="wrap">
      <button onClick={request}>测试</button>
    </div>
  );
}

export default App;
