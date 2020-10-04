import styled from "styled-components";

interface RoundButtonProps {
  color: string;
}

export const ProductContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  border-radius: 6px;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);

  img {
    width: 150px;
    display: block;
    margin: auto;
  }

  .inf {
    text-align: center;
    margin: 15px auto;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
`;

export const RoundButton = styled.button<RoundButtonProps>`
  cursor: pointer;
  border: none;
  outline: none;

  width: 60px;
  height: 60px;
  border-radius: 30px;
  
  background-color: ${(props) => props.color};
  svg {
    font-size: 30px;
    font-weight: 700;
    color: white;
  }
`;
