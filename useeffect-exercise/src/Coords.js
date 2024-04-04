import React, { useState, useEffect } from "react";

const Coords = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handler = (event) => {
      setX(event.clientX);
      setY(event.clientY);
      console.log(`x: ${event.clientX}, y: ${event.clientY}`);
    };

    window.addEventListener("mousemove", handler);
  }, []);

  return (
    <div>
      <p>
        <strong>Coords</strong>
      </p>
      <p>
        Mouse coordinates: x ({x}) / y ({y})
      </p>
    </div>
  );
};

export default Coords;
