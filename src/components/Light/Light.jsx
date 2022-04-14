import React, { useState } from "react";
import "./style.css";
import LigthOff from "./light-off.svg";
import LigthOn from "./light-on.svg";

export const Light = ({ name, state }) => {
  const [lightState, setLightState] = useState(state);

  const toggleLightState = () => {
    setLightState(lightState === "on" ? "off" : "on");
  };

  return (
    <div className="light" onClick={toggleLightState}>
      <div className="light__icon">
        <img src={lightState === "on" ? LigthOn : LigthOff} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};
