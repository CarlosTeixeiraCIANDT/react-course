import { useState } from "react";
import { CartProvider } from "./store/cart/CartProvider";
import { Cart, Header } from "./components";
import { Meals } from "./components/Meals";

const App: React.FC = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
};

export { App };
