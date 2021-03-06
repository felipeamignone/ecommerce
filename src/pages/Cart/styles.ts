import styled from "styled-components";
import ProductCart from "../../components/usercases/ProductCart";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  height: 80px;
`;

export const ProductCard = styled(ProductCart)``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 32px 0 26px;
`;

export const ApresentationText = styled.p.attrs({
  children: "Alfaces adicionados no carrinho",
})`
  font-size: 24px;
  color: blueviolet;
  font-weight: 700;
  margin: 0;
  padding: 4px;
`;

export const SecundaryText = styled.p.attrs({
  children: "Clique em confirmar para finalizar a compra",
})`
  font-size: 18px;
  color: black;
  font-weight: 400;
  margin: 0;
  padding: 4px;
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
