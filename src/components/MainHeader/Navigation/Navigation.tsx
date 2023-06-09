import styles from "./Navigation.module.css";

const Navigation: React.FC<{ isLoggedIn: boolean; onLogout: () => void }> = (
    props
) => {
    const { isLoggedIn, onLogout } = props;
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
                        <button onClick={onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export { Navigation };
