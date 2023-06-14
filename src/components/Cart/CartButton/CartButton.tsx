import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import styles from "./CartButton.module.css";
import { CartState } from "../../../store/cart-slice";

const CartButton: React.FC = () => {
    const dispatch = useDispatch();

    const quant = useSelector(
        (state: { cart: CartState }) => state.cart.totalQuantity
    );

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };
    return (
        <button className={styles.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={styles.badge}>{quant}</span>
        </button>
    );
};

export { CartButton };
