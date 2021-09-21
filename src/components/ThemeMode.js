import React from "react";
import { ReactComponent as SunIcon } from "../assets/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";
const ThemeMode = ({ mode, onClick }) => {
  return (
    <div className="theme" onClick={onClick}>
      <p>{mode ? "dark" : "light"}</p>
      {mode ? <MoonIcon /> : <SunIcon />}
      <div></div>
    </div>
  );
};

export default ThemeMode;
