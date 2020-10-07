import React from "react";
import { VscHome } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";

import { HomeButton, NavBarContainer } from "./styles";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <div className="buttons-content">
        <Link to="/" style={{ textDecoration: 'none'}}>
          <HomeButton>
            <VscHome className="button" />
          </HomeButton>
        </Link>
        <label htmlFor="Home">Home</label>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
