import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import styles from "./ForgotPassword.module.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import errorsMessages from "../../constants/errorsMessages.json";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../features/auth/authSlice";
import { ImSpinner8 } from "react-icons/im";
import MailImg from "../../images/check-email.svg";
function ForgotPassword() {
  const [error, setError] = useState(null);

  const [succes, setSucces] = useState(false);
  const [counter, setCounter] = useState(60);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      setError(message);
    }
    if (isSuccess) {
      setSucces(true);

      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter === 0) {
      setIsButtonEnabled(false);
    }
  }, [isError, isLoading, isSuccess, message, counter]);

  const validationEmail = Yup.object({
    email: Yup.string()
      .email("Email-ul este invalid")
      .required("Email-ul este oblogatoriu"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationEmail,
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
  });

  const handleSubmitAgain = () => {
    dispatch(forgotPassword(formik.values));
    setCounter(60);
    setIsButtonEnabled(() => !isButtonEnabled);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to={"/"}>
          <img src={Logo} alt="Logo_img" />
        </Link>

        <div className={styles.loginBox}>
          {succes ? (
            <>
              <img
                src={MailImg}
                alt="Imagine Mail"
                className={styles.checkMailImg}
              />
              <h2 className={styles.checkMailTitle}>
                Verifică-ți adresa de e-mail
              </h2>
              <p className={styles.checkMailText}>
                Am trimis instrucțiunile de resetare a parolei (verifică și
                folderul Spam).
              </p>
              <p className={`${styles.checkMailText} ${styles.mt_40}`}>
                Nu ai primit e-mail? Trimite din nou. <b>00:{counter}</b>
              </p>
              <button
                onClick={handleSubmitAgain}
                disabled={isButtonEnabled}
                className={styles.btn}
              >
                Trimite din nou
              </button>
              {error && error.errorCode && errorsMessages[error.errorCode] ? (
                <span className={styles.errorMessage}>
                  {errorsMessages[error.errorCode]}
                </span>
              ) : error?.errorMessage ? (
                <span className={styles.errorMessage}>
                  {error.errorMessage}
                </span>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <div className={styles.loginBoxTitle}>
                <h4>Ai uitat parola?</h4>
                <p>
                  Completează câmpurile de mai jos pentru a accesa contul tău
                  din aplicația BookOutlet
                </p>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className={styles.containerInput}
              >
                <input
                  id="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Completează adresa de e-mail"
                  className={styles.inputSignIn}
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className={styles.errorMessage}>
                    {formik.errors.email}
                  </span>
                ) : null}
                <div>
                  <button
                    type="submit"
                    className={styles.btn}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className={styles.iconContainer}>
                        <ImSpinner8 />
                      </span>
                    ) : (
                      <span> Recuperează parola</span>
                    )}
                  </button>
                  {error &&
                  error.errorCode &&
                  errorsMessages[error.errorCode] ? (
                    <span className={styles.errorMessage}>
                      {errorsMessages[error.errorCode]}
                    </span>
                  ) : error?.errorMessage ? (
                    <span className={styles.error}>{error.errorMessage}</span>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
