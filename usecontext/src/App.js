import React, { useState } from "react";
import Component1 from "./Component1";
import { UserContext } from "./contexts";

function App() {
  const [user, setUser] = useState("Marty McFly");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component1 />
    </UserContext.Provider>
  );
}

export default App;
