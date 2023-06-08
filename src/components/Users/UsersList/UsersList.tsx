import { User } from "../../Models/Users";
import { Card } from "../../UI/Card/Card";
import styles from "./UsersList.module.css";

const UsersList: React.FC<{ users: User[] }> = (props) => {
    const { users } = props;
    return (
        <Card className={styles.users}>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export { UsersList };
