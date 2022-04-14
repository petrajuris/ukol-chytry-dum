import React from "react";
import { Blinds } from "../Blinds/Blinds";
import { Climate } from "../Climate/Climate";
import { Energy } from "../Energy/Energy";
import { Ligths } from "../Lights/Lights";
import "./style.css";

export const Dashboard = ({ data }) => (
  <main className="dashboard">
    <Ligths lights={data.lights} />
    <Climate data={data.climate} />
    <Blinds state={data.blinds} />
    <Energy
      electricity={data.energyConsumption.electricity}
      water={data.energyConsumption.water}
    />
  </main>
);
