import { useContext } from "react";
import styles from "./MealItem.module.css";
import { CartContext } from "../../../store";
import { MealItemForm } from "./MealItemForm/MealItemForm";
import { Item } from "../../../Model/Item";

const MealItem: React.FC<{ item: Item }> = (props) => {
    const { item } = props;
    const { price, id, name, description } = item;
    const cartCtx = useContext(CartContext);

    const priceFixed = `$${price.toFixed(2)}`;

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price,
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{priceFixed}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export { MealItem };
