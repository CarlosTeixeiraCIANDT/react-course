import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../model/item";
import { uiActions } from "./ui-slice";

export type CartState = {
    items: Item[];
    totalQuantity: number;
    changed: boolean;
};

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    changed: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItem(state, action) {
            const newItem = action.payload;
            const oldItem = state.items.find((item) => item.id === newItem.id);
            state.changed = true;

            if (!oldItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price,
                    title: newItem.title,
                });
                state.totalQuantity++;
            } else {
                state.totalQuantity++;
                oldItem.quantity!++;
                oldItem.total = oldItem.total + newItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const oldItem = state.items.find((item) => item.id === id);
            state.changed = true;

            if (oldItem!.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
                state.totalQuantity--;
            } else {
                state.totalQuantity--;
                oldItem!.quantity!--;
                oldItem!.total = oldItem!.total! - oldItem!.price;
            }
        },
    },
});

const fetchCartData = () => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            const resp = await fetch(
                "https://react-course-d2e95-default-rtdb.firebaseio.com/cart.json"
            );

            if (!resp.ok) {
                throw new Error("Something went wrong");
            }

            const data = await resp.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error: any) {
            dispatch(
                uiActions.showNot({
                    status: "error",
                    title: "Error",
                    message: error.message,
                })
            );
        }
    };
};

const sentCartData = (cart: CartState) => {
    return async (dispatch: any) => {
        dispatch(
            uiActions.showNot({
                status: "pending",
                title: "Sending",
                message: "Sending cart data",
            })
        );

        const sendRequest = async () => {
            const resp = await fetch(
                "https://react-course-d2e95-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!resp.ok) {
                throw new Error("Request failed");
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNot({
                    status: "success",
                    title: "Success",
                    message: "Sent cart data",
                })
            );
        } catch (error: any) {
            dispatch(
                uiActions.showNot({
                    status: "error",
                    title: "Error",
                    message: error.message,
                })
            );
        }
    };
};

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartActions, cartReducer, sentCartData, fetchCartData };
