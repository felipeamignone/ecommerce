import React from "react";
import { ILanding, IProduct } from "../../data/models/landing";
import {
  TextContainer,
  ApresentationText,
  Container,
  Product,
  ProductsContainer,
  SecundaryText,
} from "./styles";

import { ListaAlfaces } from "../../data/fakedb";

const Landing = (): JSX.Element => {
  const showProducts = (list: Array<IProduct>): JSX.Element => (
    <ProductsContainer>
      {list.map((product) => {
        const { description, id, name, price, img } = product;
        return (
          <Product
            description={description}
            id={id}
            name={name}
            price={price}
            img={img}
          />
        );
      })}
    </ProductsContainer>
  );

  return (
    <Container>
      <TextContainer>
        <ApresentationText />
        <SecundaryText />
      </TextContainer>
      {showProducts(ListaAlfaces)}
    </Container>
  );
};

export default Landing;
