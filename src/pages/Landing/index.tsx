import React, { useState } from "react";
import Product from "../../components/Product";
import AddToCart from "../../components/AddToCart";

import { productsDataBase as products } from "../../config/database";

import { Container } from "./styles";
import { ProductType } from "./types";

const Landing: React.FC = () => {
  const [cart, setCart] = useState<Array<ProductType>>([]);
  return (
    <Container>
      <div className="products">
        {products.map((product, index) => (
          <Product
            product={product}
            key={index}
            handleChange={setCart}
            cart={cart}
          />
        ))}
      </div>
      <div className="add">
        <AddToCart cart={cart}/>
      </div>
    </Container>
  );
};

export default Landing;
