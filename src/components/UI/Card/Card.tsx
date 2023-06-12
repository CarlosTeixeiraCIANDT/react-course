import styles from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode }> = (props) => {
    const { children } = props;
    return <div className={styles.card}>{children}</div>;
};

export { Card };
