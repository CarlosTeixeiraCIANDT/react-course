import { Card } from "../UI";
import { CartItem } from "./CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart: React.FC = () => {
    return (
        <Card className={styles.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                <CartItem
                    item={{
                        title: "Test Item",
                        quantity: 3,
                        total: 18,
                        price: 6,
                    }}
                />
            </ul>
        </Card>
    );
};

export { Cart };
