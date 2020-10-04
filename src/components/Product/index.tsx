import React, { useState } from "react";
import { ProductContainer, RoundButton } from "./styles";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";

interface ProductProps {
  name: string;
  price: number;
  img: string;
  qnt: number;
}

const Product: React.FC<ProductProps> = (props) => {
  const [total, setTotal] = useState<number>(props.qnt);

  const addItem = () :void => setTotal(total+1);
  const removeItem = () :void => setTotal(total-1);
  
  return (
    <ProductContainer>
      <img src={props.img} alt="Product" />
      <div className="inf">
        <h1>{props.name}</h1>
        <strong>{props.price}</strong>
      </div>
      <div className="buttons">
        <RoundButton color="green" onClick={addItem}>
          <VscAdd />
        </RoundButton>
        <p>{total}</p>
        <RoundButton color="red" onClick={removeItem}>
          <VscChromeMinimize />
        </RoundButton>
      </div>
    </ProductContainer>
  );
};

export default Product;
