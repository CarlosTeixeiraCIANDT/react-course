import { Item } from "../../../../model/item";
import { Card } from "../../../UI/index";

import styles from "./ProductItem.module.css";

const ProductItem: React.FC<{ item: Item }> = ({ item }) => {
    const { title, price, description } = item;
    return (
        <li className={styles.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={styles.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={styles.actions}>
                    <button>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export { ProductItem };
