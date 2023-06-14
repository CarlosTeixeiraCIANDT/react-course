import styles from "./Notification.module.css";
import { NotificationType } from "../../../store/ui-slice";

const Notification: React.FC<{ notification: NotificationType }> = ({
    notification,
}) => {
    const { title, message, status } = notification;
    let specialstyles = "";

    if (status === "error") {
        specialstyles = styles.error;
    }
    if (status === "success") {
        specialstyles = styles.success;
    }

    const cssstyles = `${styles.notification} ${specialstyles}`;

    return (
        <section className={cssstyles}>
            <h2>{title}</h2>
            <p>{message}</p>
        </section>
    );
};

export { Notification };
