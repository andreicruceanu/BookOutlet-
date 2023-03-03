import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function ModalWish({ onClose }) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.boxWish}>
        <div className={styles.wishHeader}>
          <h5>Favorite</h5>
          <span>1 produs</span>
        </div>
        <div className={styles.boxIteamWrap}></div>
        <div className={styles.boxWishButton}>
          <Link className={styles.btnWish} to={"/account/favorite"}>
            Vezi toate produsele favorite
          </Link>
        </div>
      </div>
    </>
  );
}

export default ModalWish;
