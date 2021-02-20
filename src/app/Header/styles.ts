import styled from "styled-components";

import menu from "../../assets/icons/menuIcon.svg"

export const HeaderContainer = styled.div`
  display: flex;
  background-color: blueviolet;
  width: 100%;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderText = styled.p.attrs({
  children: "e-commerce de alface",
})`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const MenuIcon = styled.img.attrs({
  src: menu,
  alt: 'Icone menu',
})`
  height: 20px;
`;

export const MenuButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 4px 0 18px;
`;
