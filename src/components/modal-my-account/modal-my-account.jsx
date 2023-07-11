import React from "react";
import styles from "./styles.module.css";
import btn_login from "./../../images/btn-login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

function ModalMyAccount({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const userName = localStorage.getItem("firstName");

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.container}>
        {!!user ? (
          <>
            <div className={styles.modalHeaderText}>
              <p>Bine ai venit , {userName ? userName : "cititorule"}</p>
            </div>

            <ul className={styles.contentList}>
              <li>
                <Link
                  to={"/account/account"}
                  onClick={onClose}
                  className={styles.link}
                >
                  Contul meu
                </Link>
              </li>
              <li>
                <a className={styles.link} href="/Comenzile mele">
                  Comenzile mele
                </a>
              </li>
              <li>
                <a className={styles.link} href="/favorite">
                  Favorite
                </a>
              </li>
              <li>
                <Link
                  className={styles.link}
                  to={"/account/personal"}
                  onClick={onClose}
                >
                  Date personale
                </Link>
              </li>
            </ul>
            <div className={styles.myAccountFooter}>
              <span onClick={onLogout} className={styles.linkLogout}>
                Iesire
              </span>
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
                <a href="/register">Nu ai cont? Creeaza unul aici.</a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ModalMyAccount;
