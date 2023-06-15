import styles from "./EventNav.module.css";

const EventsNav = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <a href="/events">All Events</a>
                    </li>
                    <li>
                        <a href="/events/new">New Event</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { EventsNav };
