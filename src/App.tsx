import { useDispatch, useSelector } from "react-redux";
import { Layout, Cart, Products, Notification } from "./components";
import { UiState } from "./store/ui-slice";
import { CartState, fetchCartData, sentCartData } from "./store/cart-slice";
import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";

let isInitial = true;

function App() {
    const dispatch = useDispatch<Dispatch<any>>();
    const cartVisible = useSelector(
        (state: { ui: UiState }) => state.ui.visible
    );

    const cart = useSelector((state: { cart: CartState }) => state.cart);
    const notification = useSelector(
        (state: { ui: UiState }) => state.ui.notification
    );

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        /**
         * component way of sending data
         */
        // const sentCartData = async () => {
        //     dispatch(
        //         uiActions.showNot({
        //             status: "pending",
        //             title: "Sending",
        //             message: "Sending cart data",
        //         })
        //     );
        //     const resp = await fetch(
        //         "https://react-course-d2e95-default-rtdb.firebaseio.com/cart.json",
        //         {
        //             method: "PUT",
        //             body: JSON.stringify(cart),
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         }
        //     );

        //     if (!resp.ok) {
        //         throw new Error("Request failed");
        //     }

        //     const data = resp.json();

        //     dispatch(
        //         uiActions.showNot({
        //             status: "success",
        //             title: "Success",
        //             message: "Sent cart data",
        //         })
        //     );
        // };

        if (isInitial) {
            isInitial = false;
            return;
        }

        if (!cart.changed) {
            return;
        }

        /**
         * component way of sending data
         */
        // sentCartData().catch((error) => {
        //     dispatch(
        //         uiActions.showNot({
        //             status: "error",
        //             title: "Error",
        //             message: error.message,
        //         })
        //     );
        // });

        dispatch(sentCartData(cart));
    }, [cart, dispatch]);

    return (
        <>
            {notification && <Notification notification={notification} />}
            <Layout>
                {cartVisible && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export { App };
