import React from "react";
import { Light } from "../Light/Light";
import "./style.css";

export const Ligths = ({ lights }) => (
  <div className="lights">
    {lights.map((light) => (
      <Light key={light.name} name={light.name} state={light.state} />
    ))}
  </div>
);
