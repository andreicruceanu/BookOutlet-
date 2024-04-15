import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {isOpen ? (
        <div className={styles.overlay}>
          <div className={styles.containerModal}>
            <div className={styles.modalTitle}>
              <h5>{title}</h5>
              <AiOutlineClose onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
