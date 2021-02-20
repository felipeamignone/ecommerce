import React from "react";

import { HeaderContainer, HeaderText, MenuButton, MenuIcon } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <MenuButton>
        <MenuIcon />
      </MenuButton>
      <HeaderText />
    </HeaderContainer>
  );
};

export default Header;
