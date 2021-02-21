import styled from "styled-components";

import menu from "../../assets/icons/menuIcon.svg"

export const HeaderContainer = styled.div`
  display: flex;
  background-color: blueviolet;
  width: 100%;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 32px;
`;

export const HeaderText = styled.p.attrs({
  children: "e-commerce de alface",
})`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

