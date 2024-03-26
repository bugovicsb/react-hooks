import React, { useState } from "react";
import Button from "./components/Button";
import "./styles.css";

const App = () => {
  const [on, setOn] = useState(false);
  return (
    <div>
      <Button isOn={on} onClick={() => setOn((val) => !val)} />
    </div>
  );
};

export default App;
