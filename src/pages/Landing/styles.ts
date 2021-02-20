import styled from "styled-components";
import ProductCard from "../../components/usercases/ProductCard";

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
  children: 'Alfaces em estoque',
})`
  font-size: 24px;
  color: blueviolet;
  font-weight: 700;
  margin: 0;
  padding: 4px
`;

export const SecundaryText = styled.p.attrs({
  children: 'Clique no card de um produto para ver seus detalhes',
})`
  font-size: 18px;
  color: black;
  font-weight: 400;
  margin: 0;
  padding: 4px
`;

export const Product = styled(ProductCard)``;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

`;