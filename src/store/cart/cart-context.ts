import React from "react";
import { Item } from "../../Model/Item";

const CartContext = React.createContext<{
    items: Item[];
    totalAmount: number;
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}>({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export { CartContext };
