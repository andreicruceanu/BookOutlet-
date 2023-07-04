import { Link } from "react-router-dom";
import styles from "./MenuAccount.module.css";

function MenuAccount() {
  return (
    <ul className={styles.myaccountMenu}>
      <li className={styles.myaccountMenuItem}>
        <Link
          className={`${styles.menuItemLink} ${styles.active}`}
          to={"/account/account"}
        >
          Contul meu
        </Link>
      </li>
      <li className={styles.myaccountMenuItem}>
        <Link className={styles.menuItemLink} to={"/account/orders"}>
          Comenzile mele
        </Link>
      </li>
      <li className={styles.myaccountMenuItem}>
        <Link className={styles.menuItemLink} to={"/account/vouchers"}>
          Voucherele mele
        </Link>
      </li>
      <li className={styles.myaccountMenuItem}>
        <Link className={styles.menuItemLink} to={"/account/favourites"}>
          Favorite
        </Link>
      </li>
      <li className={styles.myaccountMenuItem}>
        <Link className={styles.menuItemLink} to={"/account/personal"}>
          Date personale
        </Link>
      </li>
    </ul>
  );
}
export default MenuAccount;
