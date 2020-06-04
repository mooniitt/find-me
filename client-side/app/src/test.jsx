import React, { useState, useEffect, useLayoutEffect } from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    console.log("componentDidMount :", this.ref);
  }

  componentWillUnmount() {
    console.log("componentWillMount :", this.ref);
  }

  render() {
    return <div ref={ref => (this.ref = ref)}>hello</div>;
  }
}

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;
      setCount(10 + Math.random() * 200);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
}
