import styles from "./Button.module.css";

const Button: React.FC<{
    children: React.ReactNode;
    type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: () => void;
    disabled: boolean;
    className: string;
}> = (props) => {
    const { children, type, onClick, disabled, className } = props;

    return (
        <button
            type={type || "button"}
            className={`${styles.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export { Button };
