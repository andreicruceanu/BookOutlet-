import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.css";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  size = "medium",
  children,
  titleGreen,
}) => {
  const getSizeClass = (size) => {
    switch (size) {
      case "small":
        return styles.modalSmall;
      case "medium":
        return styles.modalMedium;
      case "large":
        return styles.modalLarge;
      default:
        return styles.modalMedium;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen ? (
        <div className={styles.overlay}>
          <div className={`${styles.containerModal} ${getSizeClass(size)}`}>
            <div className={styles.modalTitle}>
              <h5 className={titleGreen ? styles.titleGreen : ""}>{title}</h5>
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
