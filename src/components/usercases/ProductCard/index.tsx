import React from "react";
import { HandleQntProducts } from "../../../data/models/cart";

import {
  Container,
  ProductName,
  ProductPrice,
  ProductImg,
  DescriptionContainer,
  AddProduct,
  RemoveProduct,
  ButtonsContainer,
  CategoryText,
} from "./styles";
import { IProductCard } from "./types";

const ProductCard = (props: IProductCard): JSX.Element => {
  const { HandleProductsPurchased, Product } = props;
  const { img, name, price, category } = Product;
  const [qnt, setQnt] = React.useState<number>(0);

  const handleQnt = (action: HandleQntProducts) => {
    if (action === "Add") {
      setQnt(qnt + 1);
    } else if (qnt > 0) {
      setQnt(qnt - 1);
    }
  };

  React.useEffect(() => HandleProductsPurchased(Product, qnt), [qnt]);

  return (
    <Container>
      <ProductImg src={img} alt={name} />
      <DescriptionContainer>
        <ProductName>{name}</ProductName>
        <CategoryText>Categoria: {category}</CategoryText>
        <ProductPrice>R$ {price}</ProductPrice>
      </DescriptionContainer>
      <ButtonsContainer>
        <AddProduct
          onClick={() => {
            handleQnt("Add");
            HandleProductsPurchased(Product, qnt);
          }}
        >
          +
        </AddProduct>
        <RemoveProduct onClick={() => handleQnt("Remove")}>-</RemoveProduct>
        <p>{qnt}</p>
      </ButtonsContainer>
    </Container>
  );
};

export default ProductCard;
