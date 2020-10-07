import React from "react";



import { ItemCartStyle } from "./styles";

interface ItemCartProps {
  name: string;
  price: number;
  img: string;
  qnt: number;
}

const ItemCart: React.FC<ItemCartProps> = (props) => {
  return (
    <ItemCartStyle>
      <img src={props.img} alt="Produto" />
      <h1>{props.name}</h1>
      <h1>{props.qnt} x {props.price}</h1>
    </ItemCartStyle>
  );
};

export default ItemCart;
