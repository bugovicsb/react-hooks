import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState(new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return <h2>It is {date.toString()}.</h2>;
}
