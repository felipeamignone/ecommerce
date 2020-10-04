import React from "react";
import Product from "../../components/Product";
import AddToCart from "../../components/AddToCart";

import avatarImg from "../../assets/images/avatar.png";

import { Container } from "./styles";

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="products">
        <Product name="Prodto 1" qnt={0} price={455.5} img={avatarImg} />
        <Product name="Prodto 2" qnt={0} price={455.5} img={avatarImg} />
        <Product name="Prodto 3" qnt={0} price={455.5} img={avatarImg} />
      </div>
      <div className="add">
        <AddToCart />
      </div>
    </Container>
  );
};

export default Landing;
