import styles from "./Button.module.css";

const Button: React.FC<{
    children: React.ReactNode;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: () => void;
}> = (props) => {
    const { children, type, onClick } = props;

    return (
        <button
            className={styles.button}
            type={type || "button"}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export { Button };
