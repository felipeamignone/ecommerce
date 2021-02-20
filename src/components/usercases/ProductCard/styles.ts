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
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const ProductButton = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 8px;
`;
