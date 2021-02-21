import React from "react";
import { IProduct } from "../../data/models/landing";
import {
  TextContainer,
  ApresentationText,
  Container,
  Product,
  ProductsContainer,
  SecundaryText,
  ConfirmButton,
  ConfirmButtonContainer,
  LinkToCart,
  BodyContainer,
} from "./styles";

import { ListaAlfaces } from "../../data/fakedb";
import { PurchasedProduct } from "../../data/models/cart";
import FilterBar from "../../components/usercases/FilterBar";

const Landing = (): JSX.Element => {
  const [productsPurchased, setProductsPurchased] = React.useState<
    Array<PurchasedProduct>
  >([]);

  const [filter, setFilter] = React.useState<string>('Todos');

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };
  // const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilter((event.target as HTMLInputElement).value);
  // };

  const handleProductsPurchased = (Product: IProduct, qnt: number) => {
    let aux = productsPurchased;
    const { id } = Product;
    const index = aux.findIndex((product) => product.TValue.id === id);

    if (index === -1) {
      const product: PurchasedProduct = { TKey: qnt, TValue: Product };
      setProductsPurchased([...productsPurchased, product]);
    } else {
      aux[index].TKey = qnt;
      setProductsPurchased(aux);
    }
  };

  const submitProducts = () => {
    const aux = productsPurchased;
    aux.forEach((product) => {
      if (product.TKey === 0) {
        const index = aux.indexOf(product);
        aux.splice(index, 1);
      }
    });
    setProductsPurchased(aux);
    localStorage.setItem("products", JSON.stringify(productsPurchased));
    // professor, estou com um bug, estou tentando tirar os produtos que estao com
    // 0 itens em qnt, mas quando é um item que eu tinha adicionado anteriormente
    // e depois zerado é enviado para o storage do mesmo jeito :( , fiz um filtro
    // no render do carrinho para não exibi-lo, mas sei que é gambi kakakakaka
  };

  const showProducts = (list: Array<IProduct>): JSX.Element => (
    <ProductsContainer>
      {list.map((product) => {
        return (
          <Product
            HandleProductsPurchased={handleProductsPurchased}
            Product={product}
          />
        );
      })}
    </ProductsContainer>
  );
  const filters = [
    "Todos",
    "Colorido",
    "Gado",
    "Textura",
    "Internacional",
    "Nem eu sei",
  ];

  const filterArray = (filter: string): Array<IProduct> => {
    if(filter === 'Todos'){
      return ListaAlfaces;
    }
    const newArray = ListaAlfaces.filter((alface) => alface.category === filter);
    return newArray;
  };

  React.useEffect(
    () => localStorage.setItem("products", JSON.stringify([])),
    []
  );

  return (
    <BodyContainer>
      <FilterBar Filters={filters} HandleFilter={handleFilter}/>
    <Container>
      <TextContainer>
        <ApresentationText />
        <SecundaryText />
      </TextContainer>
      {showProducts(filterArray(filter))}
      <ConfirmButtonContainer>
        <LinkToCart>
          <ConfirmButton onClick={() => submitProducts()}>
            IR PARA CARRINHO
          </ConfirmButton>
        </LinkToCart>
      </ConfirmButtonContainer>
    </Container>
    </BodyContainer>
  );
};

export default Landing;
