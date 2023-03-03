import React from "react";
import styles from "./styles.module.css";
import btn_login from "./../../images/btn-login.svg";
import { UserContext } from "../userContext.jsx/UserContext";
import { useContext } from "react";

function ModalMyAccount({ onClose }) {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.container}>
        {!!user ? (
          <div className={styles.modalHeaderText}>
            <p>Bine ai venit , {`${user.userDetails.firstName}`}</p>
          </div>
        ) : (
          <>
            <div className={styles.modalHeaderText}>
              <p>Contul meu</p>
            </div>
            <div className={styles.boxLogin}>
              <span className={styles.boxLoginText}>
                Intra in contul tau Bookzone.
              </span>
              <div className={styles.boxLoginBtn}>
                <a href="/login">
                  <img
                    className={styles.btnLoginBtnImg}
                    src={btn_login}
                    alt="btn-login"
                  />
                  <p className={styles.btnLoginText}> Intra in cont</p>
                </a>
              </div>
              <div className={styles.boxLoginLink}>
                <a href="/login">Nu ai cont? Creeaza unul aici.</a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ModalMyAccount;
