import React, { useState } from "react";
import "./styles.css";
import Coords from "./Coords";

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setVisible((value) => !value)}>
        Toggle Coords
      </button>
      {visible && <Coords />}
    </div>
  );
}
