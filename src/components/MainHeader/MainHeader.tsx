import { Navigation } from "./Navigation/Navigation";
import styles from "./MainHeader.module.css";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context/auth-context";

const MainHeader: React.FC = () => {
    // const { isAuthenticated, onLogout } = props;

    return (
        <header className={styles["main-header"]}>
            <h1>Simple Page</h1>
            <Navigation />
        </header>
    );
};

export { MainHeader };
