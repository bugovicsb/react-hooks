import React, { useState, useEffect } from "react";

const Button = ({ isOn, onClick }) => {
  useEffect(() => {
    isOn
      ? document.body.classList.add("active")
      : document.body.classList.remove("active");
  }, [isOn]);

  const switchClass = isOn ? "cube-switch active" : "cube-switch";
  return (
    <div className={switchClass}>
      <span className="switch" onClick={onClick}>
        <span className="switch-state off">Off</span>
        <span className="switch-state on">On</span>
      </span>
    </div>
  );
};
export default Button;
