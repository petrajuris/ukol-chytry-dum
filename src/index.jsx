import React from "react";
import { render } from "react-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { smartHomeData } from "./smartHomeData";
import "./style.css";

const App = () => (
  <div className="container">
    <Header title="Chytrý dům" />
    <Dashboard data={smartHomeData} />
  </div>
);

render(<App />, document.querySelector("#app"));
