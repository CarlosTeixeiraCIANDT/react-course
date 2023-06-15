import styles from "./PageContent.module.css";

const PageContent: React.FC<{ title: any; children: any }> = ({
    title,
    children,
}) => {
    return (
        <div className={styles.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
};

export { PageContent };
