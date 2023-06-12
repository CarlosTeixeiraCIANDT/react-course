import { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../store";
import { Modal } from "../UI";
import { CartItem } from "./CartItem/CartItem";
import { Item } from "../../Model/Item";

const Cart: React.FC<{ onClose: () => void }> = (props) => {
    const { onClose } = props;
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item: Item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={onClose}>
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export { Cart };
