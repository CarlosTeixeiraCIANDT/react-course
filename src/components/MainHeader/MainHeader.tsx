import { Navigation } from "./Navigation/Navigation";
import styles from "./MainHeader.module.css";

const MainHeader: React.FC<{
    isAuthenticated: boolean;
    onLogout: () => void;
}> = (props) => {
    const { isAuthenticated, onLogout } = props;
    return (
        <header className={styles["main-header"]}>
            <h1>Simple Page</h1>
            <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
        </header>
    );
};

export { MainHeader };
