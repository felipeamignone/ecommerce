import React from "react";
import { PurchasedProduct } from "../../../data/models/cart";

import {
  Container,
  ProductName,
  ProductPrice,
  ProductImg,
  DescriptionContainer,
  QuantidadeContainer,
  Quantidade,
  ProductDescription,
} from "./styles";

const ProductCart = (props: PurchasedProduct): JSX.Element => {
  const { TKey, TValue } = props;
  const { price, name, img, description } = TValue;
  return (
    <Container>
      <DescriptionContainer>
        <ProductImg src={img} alt={name} />
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
      </DescriptionContainer>
      <QuantidadeContainer>
        <Quantidade>{TKey} X</Quantidade>
        <ProductPrice>R$ {price}</ProductPrice>
      </QuantidadeContainer>
    </Container>
  );
};

export default ProductCart;
