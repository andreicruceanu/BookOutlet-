import MenuAccount from "./MenuAccount/MenuAccount";
import styles from "./MyAccount.module.css";

function MyAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.myaccount}>
        <div className={styles.myaccountAside}>
          <MenuAccount />
        </div>
        <div className={styles.myaccountWrap}></div>
      </div>
    </div>
  );
}

export default MyAccount;
