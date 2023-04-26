import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.css";

function ModalNoUser({ open, onClose }) {
  return (
    <>
      {open ? (
        <div className={styles.overlay}>
          <div className={styles.header}>
            hader{" "}
            <AiOutlineClose className={styles.closeIcon} onClick={onClose} />
          </div>
          <div className={styles.content}>content</div>
          <div className={styles.footer}>footer</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ModalNoUser;
