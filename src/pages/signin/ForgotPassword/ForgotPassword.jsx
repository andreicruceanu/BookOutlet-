import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../../../images/Logo.png";
import styles from "./ForgotPassword.module.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import errorsMessages from "../../../constants/errorsMessages.json";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../features/auth/authSlice";
import MailImg from "../../../images/check-email.svg";
import Button from "../../../components/ui/Button/Button";
import content from "../../../constants/content";
import Input from "../../../components/ui/Input/Input";
import ErrorMessage from "../../../components/ui/ErrorMessage/ErrorMessage";
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
                <h4>{content.forgot_password}</h4>
                <p>{content.forgot_password_subtitle}</p>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className={styles.containerInput}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Completează adresa de e-mail"
                  name="email"
                  formik={formik}
                />
                <div>
                  <Button
                    type="submit"
                    name={content.btn_forgot_Password}
                    isLoading={isLoading}
                  />
                  <ErrorMessage error={error} className="mx-0" />
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
