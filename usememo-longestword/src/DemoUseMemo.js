import React, { useState, useMemo, useEffect } from "react";
import { computeLongestWord, fetchQuote } from "./utils";

const DemoUseMemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const longestWord = useMemo(() => {
    return computeLongestWord(data, "DemoUseMemo");
  }, [data]);

  useEffect(() => {
    fetchQuote().then((data) => {
      setData(data);
    });
  }, []);

  console.log("DemoUseMemo - render");

  return (
    <div>
      <h4>Demo with useMemo</h4>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>Longest word: {longestWord}</div>
    </div>
  );
};

export default DemoUseMemo;
