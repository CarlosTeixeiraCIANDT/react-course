import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    input?: InputHTMLAttributes<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, input, ...inputProps }, ref) => {
        return (
            <div className={styles.input}>
                <label htmlFor={inputProps.id}>{label}</label>
                <input ref={ref} {...inputProps} {...input} />
            </div>
        );
    }
);

export { Input };
