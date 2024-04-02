import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button/Button";
import content from "../../constants/content";
import styles from "./styles.module.css";

function ModalNoUser({ textHeader, textContent, onClose, open }) {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
    onClose();
  }

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
              <Button
                className="p-10 mr-12 my-0"
                classNameText="text-sm"
                size="xs"
                name={content.go_to_login}
                onClick={handleLogin}
              />
              <span className={styles.btnClose} onClick={onClose}>
                {content.cancel}
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
