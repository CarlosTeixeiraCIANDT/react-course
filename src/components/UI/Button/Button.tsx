import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<{
    children: React.ReactNode;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}> = React.memo((props) => {
    const { children, type, onClick, disabled, className } = props;

    return (
        <button
            className={`${styles.button} ${className}`}
            type={type || "button"}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
});

export { Button };
