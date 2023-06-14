import { useDispatch } from "react-redux";
import { Item } from "../../../model/item";
import styles from "./CartItem.module.css";
import { cartActions } from "../../../store/cart-slice";

const CartItem: React.FC<{ item: Item }> = ({ item }) => {
    const dispatch = useDispatch();
    const { title, quantity, total, price, id } = item;

    const removeItemHandler = () => {
        dispatch(cartActions.removeItem(id));
    };

    const addItemHandler = () => {
        dispatch(cartActions.addItem(item));
    };

    return (
        <li className={styles.item}>
            <header>
                <h3>{title}</h3>
                <div className={styles.price}>
                    ${total!.toFixed(2)}{" "}
                    <span className={styles.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={styles.details}>
                <div className={styles.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export { CartItem };
