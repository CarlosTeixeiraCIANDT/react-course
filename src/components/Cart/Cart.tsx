import { Card } from "../UI";
import { CartItem } from "./CartItem/CartItem";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { CartState } from "../../store/cart-slice";

const Cart: React.FC = () => {
    const items = useSelector((state: { cart: CartState }) => state.cart.items);

    return (
        <Card className={styles.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {items.map((item) => (
                    <CartItem item={item} />
                ))}
            </ul>
        </Card>
    );
};

export { Cart };
