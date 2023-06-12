import { Item } from "../../../Model/Item";
import styles from "./CartItem.module.css";

const CartItem: React.FC<{
    item: Item;
    onAdd: () => void;
    onRemove: () => void;
}> = (props) => {
    const { item, onAdd, onRemove } = props;
    const { price, name, amount } = item;
    const priceFixed = `$${price.toFixed(2)}`;

    return (
        <li className={styles["cart-item"]}>
            <div>
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{priceFixed}</span>
                    <span className={styles.amount}>x {amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export { CartItem };
