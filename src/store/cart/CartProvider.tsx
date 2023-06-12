import { useReducer } from "react";
import { CartContext } from "./cart-context";
import { Cart } from "../../Model/Cart";
import { Item, ItemAction } from "../../Model/Item";

const defaultCartState: Cart = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state: Cart, action: ItemAction) => {
    const { items: prevItems, totalAmount: prevTotalAmount } = state;
    const { type, item } = action;
    const { id, price, amount } = item;
    if (type === "ADD") {
        const updatedTotalAmount = prevTotalAmount + price * amount;

        const existingCartItemIndex = prevItems.findIndex(
            (item) => item.id === id
        );
        const existingCartItem = prevItems[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + amount,
            };
            updatedItems = [...prevItems];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = prevItems.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (type === "REMOVE") {
        const existingCartItemIndex = prevItems.findIndex(
            (item) => item.id === id
        );
        const existingItem = prevItems[existingCartItemIndex];
        const updatedTotalAmount = prevTotalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = prevItems.filter((item) => item.id !== id);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...prevItems];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const { children } = props;
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item: Item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({
            type: "REMOVE",
            item: { id: id, name: "", price: 0, amount: 0 },
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider };
