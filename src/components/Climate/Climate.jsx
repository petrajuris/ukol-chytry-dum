import React, { useState } from "react";
import "./style.css";
import Temp from "./temp.svg";

export const Climate = ({ data }) => {
  const [temperature, setTemperature] = useState(data.temperature);

  const increaseTemperature = () => setTemperature(temperature + 1);
  const decreaseTemperature = () => setTemperature(temperature - 1);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={Temp} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {data.humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button className="button" onClick={increaseTemperature}>
          +
        </button>
        <button className="button" onClick={decreaseTemperature}>
          -
        </button>
      </div>
    </div>
  );
};
