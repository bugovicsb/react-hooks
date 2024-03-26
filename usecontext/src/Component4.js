import React, { useContext } from "react";
import { UserContext } from "./contexts";

function Component4() {
  const user = useContext(UserContext);

  return (
    <>
      <h4>Component 4</h4>
      <p>{`Hello ${user} again!`}</p>
    </>
  );
}

export default Component4;
