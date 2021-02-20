import React from "react";
import { ListaAlfaces } from "../../data/fakedb";

import {
  Container,
  Item,
  ProductCard,
  ApresentationText,
  SecundaryText,
  TextContainer,
} from "./styles";
import { ICart } from "../../data/models/cart";

const Cart: React.FC = () => {
  const FakeCart: ICart = {
    PurchasedProducts: [
      { TKey: 4, TValue: ListaAlfaces[0] },
      { TKey: 3, TValue: ListaAlfaces[1] },
      { TKey: 2, TValue: ListaAlfaces[5] },
    ],
  };

  const { PurchasedProducts } = FakeCart;

  const ShowProducts = (): JSX.Element => {
    return (
      <Container>
        <TextContainer>
          <ApresentationText />
          <SecundaryText />
        </TextContainer>
        {PurchasedProducts.map(
          (product): JSX.Element => {
            const { TKey, TValue } = product;
            return (
              <Item>
                <ProductCard TKey={TKey} TValue={TValue} />
              </Item>
            );
          }
        )}
      </Container>
    );
  };

  return ShowProducts();
};

export default Cart;
