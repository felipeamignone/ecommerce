import styled from "styled-components";

export const NavBarContainer = styled.div`
  border-top: 2px solid black;
  background-color: blueviolet;

  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    width: 60%;
    height: 60%;
  }

  div {

    label {
      font-size: 20px;
      font-weight: 700;
    }
  }

`;

export const HomeButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;

  margin: 5px 20px;
  border-radius: 50px;
  width: 50px;
`;

export const CartButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;

  margin: 5px 20px;
  border-radius: 50px;
  width: 50px;

`;
