import React, { Component } from "react";
import BuildControl from "./BuildControl/BuildControl";
import { Ingredients } from "../../../interface";

import "./BuildControls.css";

interface BurgerProps {
  ingredientAdded: (type: Ingredients) => void;
}

const controls = [
  { label: "Salad", type: Ingredients.salad },
  { label: "Bacon", type: Ingredients.bacon },
  { label: "Cheese", type: Ingredients.cheese },
  { label: "Meat", type: Ingredients.meat }
];

const BuildControls: React.SFC<BurgerProps> = props => {
  return (
    <div className="BuildControls">
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
