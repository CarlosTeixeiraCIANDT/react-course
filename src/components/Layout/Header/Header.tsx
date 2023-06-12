import mealsImage from "../../../assets/meals.jpg";
import styles from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton/HeaderCartButton";

const Header: React.FC<{ onShowCart: () => void }> = (props) => {
    const { onShowCart } = props;
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </>
    );
};

export { Header };
