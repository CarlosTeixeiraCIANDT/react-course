import styles from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return (
        <section className={`${styles.card} ${className ? className : ""}`}>
            {children}
        </section>
    );
};

export { Card };
