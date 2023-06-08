import { useRef, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Card } from "../../UI/Card/Card";

import styles from "./AddUser.module.css";
import { User } from "../../Models/Users";
import { ErrorModal } from "../../UI/ErrorModal/ErrorModal";
import { Error } from "../../Models/Error";

const AddUser: React.FC<{ onAddUser: (newUser: User) => void }> = (props) => {
    const { onAddUser } = props;
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<Error | null>(null);

    const clearForm = () => {
        usernameInputRef.current!.value = "";
        ageInputRef.current!.value = "";
    };

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            usernameInputRef.current?.value.trim().length === 0 ||
            ageInputRef.current?.value.trim().length === 0
        ) {
            let error: Error = {
                title: "Invalid input",
                message: "Name and age cannot be empty",
            };
            setError(error);
            return;
        }

        if (parseInt(ageInputRef.current!.value) < 1) {
            let error: Error = {
                title: "Invalid input",
                message: "Age cannot be lower than 1",
            };
            setError(error);
            return;
        }

        let userData: User = {
            id: Math.random().toString(),
            username: usernameInputRef.current!.value,
            age: parseInt(ageInputRef.current!.value),
        };

        onAddUser(userData);

        clearForm();
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal error={error} addErrorHandler={errorHandler} />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={usernameInputRef} />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export { AddUser };
