import { useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
    </div>
  );
}
