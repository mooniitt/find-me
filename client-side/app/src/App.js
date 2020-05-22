import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { TABLE } from "src/constants/thing";
import Table from "@/table";

function request() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.zhifuchedao.xyz:3000/api");
  xhr.send(null);
}

function App(props) {
  const [table, setTable] = useState(TABLE);
  useEffect(request, []);
  return (
    <div className="wrap">
      <button
        onClick={() => {
          props.dispatch({
            type: "table/table",
            payload: { num: props.data + 1 }
          });
        }}
      >
        测试
      </button>
      <p>{props.data}</p>
      <Table table={table} />
    </div>
  );
}

export default connect(({ table }) => ({
  data: table
}))(App);
