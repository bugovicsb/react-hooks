import { useRef, useState, useEffect } from "react";

const Stopwatch = () => {
  const timerIdRef = useRef(null);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (!timerIdRef.current) {
      timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    }
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div className="timer">Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
};

export default Stopwatch;
