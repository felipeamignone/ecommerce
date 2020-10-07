import React, { useState } from "react";
import { ProductContainer, RoundButton } from "./styles";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import avatar from "../../assets/images/avatar.png";
import { ProductType } from "../../pages/Landing/types";

interface ProductProps {
  product: ProductType;
  handleChange: Function;
  cart: ProductType[];
}

const Product: React.FC<ProductProps> = (props) => {
  const [total, setTotal] = useState<number>(0);

  const { name, price, img, id } = props.product;
  const { handleChange, cart } = props;

  const addItem = (): void => {
    const cartItem: ProductType = {
      name,
      price,
      id,
      img,
      qnt: total + 1,
    };
    const hasElement = cart.find((prod) => prod.id === id);

    //identifica se tem um produto no array cart, se tiver, adiciona 1 no qnt desse elemento, se nao ele adiciona um elemento novo
    if (hasElement) {
      const elementIndex = cart.findIndex((element) => element === hasElement);
      const cartAux = [...cart];
      cartAux[elementIndex].qnt = total + 1;
      handleChange(cartAux);
    } else handleChange([...cart, cartItem]);
    setTotal(total + 1);
  };

  const removeItem = (): void => {
    const idx = cart.findIndex((prod) => prod.id === id);
    if (total > 0) {
      const hasElement = cart.find((prod) => prod.id === id);

      if (hasElement && cart[idx].qnt !== undefined && cart[idx]?.qnt > 1 ) {
        console.log('Entrou no if');
        const cartAux = [...cart];
        const elementIndex = cartAux.findIndex((element) => element === hasElement);
        cartAux[elementIndex].qnt = total - 1;
        console.log(cartAux[elementIndex].qnt);
        handleChange(cartAux);
      } else {
        console.log('Entrou no else');
        handleChange(cart.filter(elem => elem.id !== id));
      }
      setTotal(total - 1);
    } 
  };

  return (
    <ProductContainer>
      <img src={avatar} alt="Product" />
      <div className="inf">
        <h1>{name}</h1>
        <strong>{price}</strong>
      </div>
      <div className="buttons">
        <RoundButton color="green" onClick={addItem}>
          <VscAdd />
        </RoundButton>
        <p>{total}</p>

        {
          <RoundButton color="red" onClick={removeItem}>
            <VscChromeMinimize />
          </RoundButton>
        }
      </div>
    </ProductContainer>
  );
};

export default Product;
