import React, { useState } from "react";
import "./style.css";
import BlindsOpen from "./blinds-open.svg";
import BlindsClosed from "./blinds-closed.svg";

export const Blinds = ({ state }) => {
  const [blindsState, setBlindsState] = useState(state);

  const closeBlinds = () => setBlindsState("closed");
  const openBlinds = () => setBlindsState("open");

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={BlindsOpen} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={`button ${blindsState === "open" ? "button--active" : ""}`}
          onClick={openBlinds}
        >
          Otevřeno
        </button>
        <button
          className={`button ${
            blindsState === "closed" ? "button--active" : ""
          }`}
          onClick={closeBlinds}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};
