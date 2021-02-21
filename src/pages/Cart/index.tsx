import React from "react";
import { ListaAlfaces } from "../../data/fakedb";

import {
  Container,
  Item,
  ProductCard,
  ApresentationText,
  SecundaryText,
  TextContainer,
  ConfirmButton,
  ConfirmButtonContainer,
} from "./styles";
import { ICart, PurchasedProduct } from "../../data/models/cart";

const Cart: React.FC = () => {
  const getProducts = (): Array<PurchasedProduct> => {
    const storageProducts = localStorage.getItem("products");
    if (storageProducts !== null) {
      return JSON.parse(storageProducts);
    }
    return [];
  };

  const FakeCart: ICart = {
    PurchasedProducts: getProducts(),
  };

  const { PurchasedProducts } = FakeCart;

  const ShowProducts = (): JSX.Element => (
    <>
      {PurchasedProducts.map(
        (product): JSX.Element => {
          const { TKey, TValue } = product;
          if (TKey !== 0) {
            return (
              <Item>
                <ProductCard TKey={TKey} TValue={TValue} />
              </Item>
            );
          }
          return <> </>
        }
      )}
    </>
  );

  return (
    <Container>
      <TextContainer>
        <ApresentationText />
        <SecundaryText />
      </TextContainer>
      {ShowProducts()}
      <ConfirmButtonContainer>
        <ConfirmButton>CONFIRMAR</ConfirmButton>
      </ConfirmButtonContainer>
    </Container>
  );
};

export default Cart;
