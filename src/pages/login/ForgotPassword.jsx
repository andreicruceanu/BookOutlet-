import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import styles from "./ForgotPassword.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import errorsMessages from "../../constants/errorsMessages.json";
function ForgotPassword() {
  const [error, setError] = useState(null);

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
    onSubmit: async (values) => {
      try {
        const fetchData = await axios.post("/api/auth/forgotPassword", values);

        if (fetchData.response.status === 200) {
          console.log("succes");
        }
      } catch (err) {
        setError(err.response.data);
      }
    },
  });

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to={"/"}>
          <img src={Logo} alt="Logo_img" />
        </Link>
        <div className={styles.loginBox}>
          <div className={styles.loginBoxTitle}>
            <h4>Ai uitat parola?</h4>
            <p>
              Completează câmpurile de mai jos pentru a accesa contul tău din
              aplicația BookOutlet
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
              <span className={styles.errorMessage}>{formik.errors.email}</span>
            ) : null}
            <div>
              <button type="submit" className={styles.btn}>
                Recuperează parola
              </button>
              {error && error.errorCode && errorsMessages[error.errorCode] ? (
                <span className={styles.error}>
                  {errorsMessages[error.errorCode]}
                </span>
              ) : error?.errorMessage ? (
                <span className={styles.error}>{error.errorMessage}</span>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
