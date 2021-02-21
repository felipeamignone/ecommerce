import { IProduct } from "./landing";

export interface ICart {
    PurchasedProducts: Array<PurchasedProduct>;
};

export type PurchasedProduct = KeyValuePair<number, IProduct>;

export type HandleQntProducts = "Add" | "Remove";

export type KeyValuePair<Tkey, TValue> = {TKey: Tkey, TValue: TValue }