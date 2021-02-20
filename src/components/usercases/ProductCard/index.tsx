import React from "react";
import { IProduct } from "../../../data/models/landing";

import {
  Container,
  ProductName,
  ProductPrice,
  ProductImg,
  DescriptionContainer,
  ProductButton,
} from "./styles";

const ProductCard = (props: IProduct): JSX.Element => {
  const { name, price, img } = props;
  return (
    <Container>
      <ProductButton>
        <ProductImg src={img} alt={name} />
        <DescriptionContainer>
          <ProductName>{name}</ProductName>
          <ProductPrice>R$ {price}</ProductPrice>
        </DescriptionContainer>
      </ProductButton>
    </Container>
  );
};

export default ProductCard;
