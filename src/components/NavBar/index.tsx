import React from "react";
import { VscHome } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";

import { CartButton, HomeButton, NavBarContainer } from "./styles";

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <div className="buttons-content">
        <HomeButton>
          <VscHome className="button" />
        </HomeButton>
        <label htmlFor="Home">Home</label>
      </div>
      <div className="buttons-content">
        <label htmlFor="Cart">Carrinho</label>
        <CartButton>
          <FiShoppingCart className="button" />
        </CartButton>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
