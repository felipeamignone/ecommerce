import React from "react";

import { HeaderContainer, HeaderText, HomeButton } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HomeButton>
        <HeaderText />
      </HomeButton>
    </HeaderContainer>
  );
};

export default Header;
