import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../pages/Landing/types";

import { AddBtn } from "./styles";

interface AddToCartProps {
  cart: ProductType[];
}

const AddToCart: React.FC<AddToCartProps> = (props) => {
  const {cart} = props;

  const addToCart = (): void => {
    localStorage.setItem("cart", JSON.stringify({cart}));
  }
  return (
    <Link to="/cart" style={{ textDecoration: 'none'}}>
    <AddBtn type="submit" onClick={addToCart}>
          <h1>Add To Cart</h1>
    </AddBtn>
    </Link>
  );
};

export default AddToCart;
