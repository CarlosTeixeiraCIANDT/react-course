import { Item } from "./Item";

export type Cart = {
    items: Item[];
    totalAmount: number;
};

export type CartAction = {
    type: string;
} & Cart;
