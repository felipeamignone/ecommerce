import React from "react";
import { ProductType } from "../../pages/Landing/types";


import { Container } from "./styles";

interface TotalPriceProps {
  cart: ProductType[];
}

const TotalPriceContainer: React.FC<TotalPriceProps> = (props) => {
  console.log(props.cart);
  const calculateTotalPrice = (cartItems: ProductType[]) => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const { qnt, price } = item;
      if (qnt !== undefined) {
        totalPrice += qnt * price;
      }
    });
    return totalPrice.toFixed(2);
  };
  console.log(calculateTotalPrice(props.cart));
  return (
    <Container>
      <h1>Total:</h1>
      <strong>{calculateTotalPrice(props.cart)}</strong>
    </Container>
  );
};

export default TotalPriceContainer;
