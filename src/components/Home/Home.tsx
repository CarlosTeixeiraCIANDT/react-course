import { Card } from "../index";
import styles from "./Home.module.css";

const Home: React.FC<{ onLogout: () => void }> = (props) => {
    const { onLogout } = props;
    return (
        <Card className={styles.home}>
            <h1>Welcome Back</h1>
        </Card>
    );
};

export { Home };
