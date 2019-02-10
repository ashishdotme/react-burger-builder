import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

interface BurgerBuilderState {
  ingredients: Record<string, number>;
}
export default class BurgerBuilder extends Component<any, BurgerBuilderState> {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 2
    }
  };
  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}
