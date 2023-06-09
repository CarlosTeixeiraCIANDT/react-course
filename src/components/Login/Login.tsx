import { useState } from "react";
import { Button, Card } from "../index";
import styles from "./Login.module.css";

const Login: React.FC<{
    onLogin: (email: string, password: string) => void;
}> = (props) => {
    const { onLogin } = props;

    const [enteredEmail, setEnteredEmail] = useState<string>("");
    const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
    const [enteredPassword, setEnteredPassword] = useState<string>("");
    const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    function emailChangeHandler(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setEnteredEmail(event.currentTarget.value);
        setFormIsValid(
            event.target.value.includes("@") &&
                enteredPassword.trim().length > 6
        );
    }

    function validateEmailHandler(
        event: React.FocusEvent<HTMLInputElement, Element>
    ): void {
        setEmailIsValid(enteredEmail.includes("@"));
    }

    function passwordChangeHandler(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setEnteredPassword(event.currentTarget.value);
        setFormIsValid(
            event.target.value.trim().length > 6 && enteredEmail.includes("@")
        );
    }

    function validatePasswordHandler(
        event: React.FocusEvent<HTMLInputElement, Element>
    ): void {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    }

    function submitHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        onLogin(enteredEmail, enteredPassword);
    }

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${styles.control} ${
                        emailIsValid ? "" : styles.invalid
                    }`}
                >
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${styles.control} ${
                        passwordIsValid ? "" : styles.invalid
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={styles.actions}>
                    <Button
                        type="submit"
                        className={styles.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export { Login };
