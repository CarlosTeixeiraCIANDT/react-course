import { useState } from "react";
import { AddUser, UsersList } from "./components";
import { User } from "./components/Models/Users";

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const hasUser = users.length !== 0;

    const addUserHandler = (newUser: User) => {
        setUsers((users) => [...users, newUser]);
    };

    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            {hasUser && <UsersList users={users} />}
        </>
    );
};

export { App };
