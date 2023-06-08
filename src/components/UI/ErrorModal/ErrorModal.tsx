import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

import styles from "./ErrorModal.module.css";

const ModalOverlay: React.FC<{
    error: { title: string; message: string };
    addErrorHandler: () => void;
}> = (props) => {
    const { error, addErrorHandler } = props;
    const onConfirm = () => {
        addErrorHandler();
    };

    return (
        <>
            <div className={styles.backdrop} onClick={onConfirm} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{error.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{error.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    );
};

const ErrorModal: React.FC<{
    error: { title: string; message: string };
    addErrorHandler: () => void;
}> = (props) => {
    const { error, addErrorHandler } = props;

    return (
        <>
            {ReactDOM.createPortal(
                <ModalOverlay
                    error={error}
                    addErrorHandler={addErrorHandler}
                />,
                document.getElementById("overlay-root") as HTMLElement
            )}
            ;
        </>
    );
};

export { ErrorModal };
