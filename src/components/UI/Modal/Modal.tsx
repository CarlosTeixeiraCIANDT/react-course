import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop: React.FC<{ onClose: () => void }> = (props) => {
    const { onClose } = props;
    return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<{ children: React.ReactNode }> = (props) => {
    const { children } = props;
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = (
    props
) => {
    const { children, onClose } = props;
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                portalElement as HTMLElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement as HTMLElement
            )}
        </>
    );
};

export { Modal };
