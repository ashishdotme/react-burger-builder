import React, { Component } from "react";
import BuildControl from "./BuildControl/BuildControl";
import { Ingredients, Ingredient } from "../../../interface";

import "./BuildControls.css";

interface BurgerProps {
  disabled: Ingredients
  ingredientAdded: (type: Ingredient) => void;
  ingredientRemoved: (type: Ingredient) => void;
}

const controls = [
  { label: "Salad", type: Ingredient.salad },
  { label: "Bacon", type: Ingredient.bacon },
  { label: "Cheese", type: Ingredient.cheese },
  { label: "Meat", type: Ingredient.meat }
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
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
