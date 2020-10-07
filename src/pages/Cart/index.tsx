import React from "react";


import ItemCart from "../../components/ItemCart";

import avatarImg from "../../assets/images/avatar.png";

import { Container } from "./styles";
import { ProductType } from "../Landing/types";
import TotalPrice from "../../components/TotalPrice";

interface ParseProducts {
  cart: ProductType[]
}

const Cart: React.FC = () => {
  const cartProduct = localStorage.getItem("cart");

  //transforma o string recebido pelo geItem em objetos
  let parseProducts: ParseProducts;
  parseProducts = JSON.parse(cartProduct ? cartProduct : "{cart: []}");
  //

  

  return (
    <Container>
      <div className="items">
        {/* verfica se o lengh é maior que 0, se for true, executa o map  */}
        {parseProducts.cart.length > 0 && parseProducts.cart.map((item, index) => (
          <ItemCart name={item.name} qnt={item.qnt ? item.qnt : 0} price={item.price} img={avatarImg} key={index} />
        ))}        
        <TotalPrice cart={parseProducts.cart}/>
      </div>
    </Container>
  );
};

export default Cart;
