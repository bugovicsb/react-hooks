import React, { useState, useEffect } from "react";
import { computeLongestWord, fetchQuote } from "./utils";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const longestWord = computeLongestWord(data, "Demo");

  useEffect(() => {
    fetchQuote().then((data) => {
      setData(data);
    });
  }, []);

  console.log("Demo - render");

  return (
    <div>
      <h4>Demo</h4>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>Longest world: {longestWord}</div>
    </div>
  );
};

export default Demo;
