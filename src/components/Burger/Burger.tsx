import React, { Component } from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

interface BurgerProps {
  ingredients: Record<string, number>;
}
const Burger: React.SFC<BurgerProps> = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    (igKey: string) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }
  );
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
