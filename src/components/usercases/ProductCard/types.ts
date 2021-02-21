import { PurchasedProduct } from "../../../data/models/cart";
import { IProduct } from "../../../data/models/landing";

export interface IProductCard {
    Product: IProduct,
    HandleProductsPurchased: (product: IProduct, qnt: number) => void;
}