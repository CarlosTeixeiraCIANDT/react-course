import { useDispatch } from "react-redux";
import { Item } from "../../../../model/item";
import { Card } from "../../../UI/index";

import styles from "./ProductItem.module.css";
import { cartActions } from "../../../../store/cart-slice";

const ProductItem: React.FC<{ item: Item }> = ({ item }) => {
    const dispatch = useDispatch();

    const { title, price, description } = item;

    const addToCartHandler = () => {
        dispatch(cartActions.addItem(item));
    };

    return (
        <li className={styles.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={styles.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={styles.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export { ProductItem };
