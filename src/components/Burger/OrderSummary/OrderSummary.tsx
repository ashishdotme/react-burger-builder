import React from "react";

interface OrderSummaryProps {
    ingredients: {
        [key: string]: number
    }
}
const OrderSummary: React.SFC<OrderSummaryProps> = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, index) => {
    return (
      <li key={index}> 
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout</p>
    </div>
  );
};

export default OrderSummary;
