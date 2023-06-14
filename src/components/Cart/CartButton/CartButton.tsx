import styles from "./CartButton.module.css";

const CartButton: React.FC = () => {
    return (
        <button className={styles.button}>
            <span>My Cart</span>
            <span className={styles.badge}>1</span>
        </button>
    );
};

export { CartButton };
