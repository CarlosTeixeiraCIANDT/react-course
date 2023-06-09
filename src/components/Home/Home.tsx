import { useContext } from "react";
import { Card } from "../index";
import styles from "./Home.module.css";
import { AuthContext } from "../store/auth-context/auth-context";

const Home: React.FC = () => {
    // const { onLogout } = props;
    const authContext = useContext(AuthContext);
    const { logoutHandler } = authContext;

    return (
        <Card className={styles.home}>
            <h1>Welcome Back</h1>
        </Card>
    );
};

export { Home };
