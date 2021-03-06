import styled from "styled-components";
import ProductCard from "../../components/usercases/ProductCard";

export const BodyContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  overflow: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 32px 0 26px;
`;

export const ApresentationText = styled.p.attrs({
  children: "Alfaces em estoque",
})`
  font-size: 24px;
  color: blueviolet;
  font-weight: 700;
  margin: 0;
  padding: 4px;
`;

export const SecundaryText = styled.p.attrs({
  children: "Clique nos botões para adicionar ou remover um item do carrinho",
})`
  font-size: 18px;
  color: black;
  font-weight: 400;
  margin: 0;
  padding: 4px;
`;

export const Product = styled(ProductCard)``;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ConfirmButton = styled.button.attrs({})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 45px;
`;
export const LinkToCart = styled.a.attrs({
  href: "/cart",
})`
  text-decoration: none;
  color: black;
`;
