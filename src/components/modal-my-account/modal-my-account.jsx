import React from "react";
import styles from "./styles.module.css";
import btn_login from "./../../images/btn-login.svg";
import { UserContext } from "../userContext.jsx/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ModalMyAccount({ onClose }) {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      onClose();
      localStorage.setItem("currentUser", null);
      setUser(null);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.container}>
        {!!user ? (
          <>
            <div className={styles.modalHeaderText}>
              <p>Bine ai venit , {`${user.firstName}`}</p>
            </div>
            <div>
              <Link to={""} onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </>
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
                <Link to={"/register"}>Nu ai cont? Creeaza unul aici.</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ModalMyAccount;
