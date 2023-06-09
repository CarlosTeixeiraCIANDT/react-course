import { useContext, useEffect, useReducer, useState } from "react";
import { Button, Card } from "../index";
import styles from "./Login.module.css";
import { Email, EmailAction } from "../../models/Email";
import { Password, PasswordAction } from "../../models/Password";
import { AuthContext } from "../store/auth-context/auth-context";

const emailReducer = (state: Email, action: EmailAction) => {
    const { type, value } = action;
    const { value: prevValue } = state;

    switch (type) {
        case "INPUT":
            return { value: value, isValid: value.includes("@") };
        case "BLUR":
            return { value: prevValue, isValid: prevValue.includes("@") };
        default:
            return { value: "", isValid: false };
    }
};

const passwordReducer = (state: Password, action: PasswordAction) => {
    const { type, value } = action;
    const { value: prevValue } = state;

    switch (type) {
        case "INPUT":
            return { value: value, isValid: value.trim().length > 6 };
        case "BLUR":
            return {
                value: prevValue,
                isValid: prevValue.trim().length > 6,
            };

        default:
            return { value: "", isValid: false };
    }
};

const Login: React.FC = () => {
    // const { onLogin } = props;
    const authContext = useContext(AuthContext);
    const { loginHandler } = authContext;

    // const [enteredEmail, setEnteredEmail] = useState<string>("");
    // const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
    // const [enteredPassword, setEnteredPassword] = useState<string>("");
    // const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: true,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: true,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            // setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [emailState.isValid, passwordState.isValid]);

    function emailChangeHandler(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        dispatchEmail({ type: "INPUT", value: event.currentTarget.value });

        // setEnteredEmail(event.currentTarget.value);

        setFormIsValid(
            event.currentTarget.value.includes("@") &&
                passwordState.value.trim().length > 6
        );
    }

    function validateEmailHandler(
        event: React.FocusEvent<HTMLInputElement, Element>
    ): void {
        dispatchEmail({ type: "BLUR", value: "" });

        // setEmailIsValid(emailState.value.includes("@"));
    }

    function passwordChangeHandler(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        dispatchPassword({ type: "INPUT", value: event.currentTarget.value });

        // setEnteredPassword(event.currentTarget.value);

        setFormIsValid(
            emailState.value.includes("@") &&
                event.currentTarget.value.trim().length > 6
        );
    }

    function validatePasswordHandler(
        event: React.FocusEvent<HTMLInputElement, Element>
    ): void {
        dispatchPassword({ type: "BLUR", value: "" });

        // setPasswordIsValid(enteredPassword.trim().length > 6);
    }

    function submitHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        // onLogin(enteredEmail, enteredPassword);

        // onLogin(emailState.value, passwordState.value);
        loginHandler(emailState.value, passwordState.value);
    }

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${styles.control} ${
                        emailState.isValid ? "" : styles.invalid
                    }`}
                >
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${styles.control} ${
                        passwordState.isValid ? "" : styles.invalid
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
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
