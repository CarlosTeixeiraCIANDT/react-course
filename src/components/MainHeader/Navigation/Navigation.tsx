import { useContext } from "react";
import styles from "./Navigation.module.css";
import { AuthContext } from "../../store/auth-context/auth-context";

const Navigation: React.FC = () => {
    // const { isLoggedIn, onLogout } = props;
    const authContext = useContext(AuthContext);
    const { isLoggedIn, logoutHandler } = authContext;
    return (
        <nav className={styles.nav}>
            <ul>
                {isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {isLoggedIn && (
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export { Navigation };
