import { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import { CartContext } from "../../../../store";
import { CartIcon } from "../../..";

const HeaderCartButton: React.FC<{ onClick: () => void }> = (props) => {
    const { onClick } = props;
    const [highLighted, setHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnStyles = `${styles.button} ${highLighted ? styles.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setHighlighted(true);

        const timer = setTimeout(() => {
            setHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnStyles} onClick={onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export { HeaderCartButton };
