import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

const MainNav = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : undefined
                            }
                            to="/"
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : undefined
                            }
                            to="/events"
                        >
                            Events
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { MainNav };
