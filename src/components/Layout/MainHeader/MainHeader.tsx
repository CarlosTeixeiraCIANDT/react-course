import { CartButton } from "../../Cart";
import styles from "./MainHeader.module.css";

const MainHeader: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { MainHeader };
