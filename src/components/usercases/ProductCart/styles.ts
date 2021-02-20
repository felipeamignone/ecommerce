import styled from "styled-components";
import { MyGrid } from "../../ui/MyGrid/styles";

export const Container = styled(MyGrid).attrs({
  xs: 12,
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 200px;
  margin: 8px;
  padding: 0 16px;
  background-color: #f0f0f0;
  border-radius: 14px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 44px;
  height: 44px;
`;

export const ProductName = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: blueviolet;
  padding: 0 32px;
  width: 300px; 
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  justify-self: flex-end;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 900;
`;

export const Quantidade = styled.p`
  font-size: 18px;
  font-weight: 900;
  padding: 8px;
`;

export const QuantidadeContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-end;
  align-items: center;
`;
