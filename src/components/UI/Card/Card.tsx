import styles from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode; className: string }> = (
    props
) => {
    const { children, className } = props;
    return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export { Card };
