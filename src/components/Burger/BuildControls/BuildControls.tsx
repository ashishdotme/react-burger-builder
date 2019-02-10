import React, { Component } from "react";
import BuildControl from "./BuildControl/BuildControl";

import "./BuildControls.css";

interface BurgerProps {

}

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls: React.SFC<BurgerProps> = props => {
  return <div className="BuildControls">{controls.map((ctrl) => {
      return <BuildControl key={ctrl.label} label={ctrl.label} />
  })}</div>;
};

export default BuildControls;
