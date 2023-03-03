import React, { useContext } from "react";
import styles from "./styles.module.css";
import Logo from "../../images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import { validationLogIn } from "./validationLogIn";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../components/userContext.jsx/UserContext";

function Login() {
  const [visible, setVisibility] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);

  const handlePasswordClick = () => {
    setVisibility(!visible);
  };

  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validationSchema: validationLogIn,
    onSubmit: async (values) => {
      try {
        const userInfo = await axios.post("/api/auth/login", values);
        console.log(userInfo);
        setUser(userInfo?.data);
        setRedirect(true);
      } catch (err) {
        if (err.response?.status === 400) {
          setErrorLogin("Adresă de e-mail sau parolă incorecte");
        } else if (err.userInfo?.status === 401) {
          setErrorLogin("Neautorizat");
        }
      }
    },
  });

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <a className={styles.logo} href="/">
          <img src={Logo} alt="Logo_img" />
        </a>
        <div className={styles.loginBox}>
          <div className={styles.loginBoxTitle}>
            <h4>Login pe Bookzone</h4>
            <p>Introdu credentialele pentru a te conecta</p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            id="logInForm"
            className={styles.containerInput}
          >
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={styles.inputSignIn}
              placeholder="Email"
            />
            {formik.errors.email && formik.touched.email ? (
              <span className={styles.errorMessage}>{formik.errors.email}</span>
            ) : (
              ""
            )}
            <div className={styles.passwordContainer}>
              <input
                className={styles.inputSignIn}
                type={visible ? "text" : "password"}
                placeholder="Parola"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span
                className={styles.iconPassword}
                onClick={handlePasswordClick}
              >
                {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className={styles.errorMessage}>
                {formik.errors.password}
              </span>
            ) : (
              ""
            )}
          </form>
          <button form="logInForm" type="submit" className={styles.btnLogIn}>
            Login
          </button>
          {errorLogin && <span>{errorLogin}</span>}

          <div className={styles.containerRememberMe}>
            <div className={styles.loginRememberMe}>
              <input
                id="rememberMe"
                className={styles.inputCheckbox}
                type="checkbox"
                name="rememberMe"
                value={false}
                onChange={formik.handleChange}
              />
              <label htmlFor="rememberMe">Tine-ma minte</label>
            </div>
            <span>
              <a href="/">Ai uitat parola?</a>
            </span>
          </div>
          <div className={styles.googleWrap}>
            <p className={styles.signinSep}>sau</p>
            <h3> Logheaza-te cu</h3>
            <div className={styles.googleLogin}>
              <a href="/">
                <FcGoogle />
                <span className={styles.btnGoogleText}>Continua cu Google</span>
              </a>
            </div>
            <a href="/register">Nu ai cont? Creaza unul aici</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
