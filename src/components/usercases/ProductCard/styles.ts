import styled from "styled-components";
import { MyGrid } from "../../ui/MyGrid/styles";

export const Container = styled(MyGrid).attrs({
  xs: 4,
})`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 200px;
  margin: 8px;
  background-color: #f0f0f0;
  border-radius: 14px;
  padding: 8px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  width: 100%;
`;

export const ProductImg = styled.img`
  width: 145px;
  height: 145px;
`;

export const ProductName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: blueviolet;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 900;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 45px;
`;

export const AddProduct = styled.button`
  width: 40px;
  margin: 5px;
  background-color: green;
  outline: none;
  cursor: pointer;
`;

export const RemoveProduct = styled.button`
  width: 40px;
  margin: 5px;
  background-color: red;
  outline: none;
  cursor: pointer;
`;

export const CategoryText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
