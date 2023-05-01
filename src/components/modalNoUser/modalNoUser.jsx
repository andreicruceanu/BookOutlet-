import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function ModalNoUser({ textHeader, textContent, button, onClose, open }) {
  return (
    <>
      {open ? (
        <div className={styles.overlay}>
          <div className={styles.containerModal}>
            <div className={styles.modalTitle}>
              <h5>{textHeader}</h5>
              <AiOutlineClose onClick={onClose} />
            </div>
            <div className={styles.modalWrap}>
              <div className={styles.modalContent}>
                <p>{textContent}</p>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <Link className={styles.modalBtn} to={"/login"}>
                Mergi la pagina de login
              </Link>
              <span className={styles.btnClose} onClick={onClose}>
                Anulează
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ModalNoUser;
