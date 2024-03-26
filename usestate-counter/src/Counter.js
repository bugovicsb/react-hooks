import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <strong>Counter (function component)</strong>
      </p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((val) => val + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
