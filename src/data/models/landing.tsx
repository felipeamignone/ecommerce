export interface ILanding {
  products: Array<IProduct>;
}

export type IProduct = {
  name: string;
  price: number;
  id: number;
  description: string;
  category: string;
  img: string;
};

export type ICaracteristica = Array<string>;
