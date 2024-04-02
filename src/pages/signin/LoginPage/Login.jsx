import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Logo from "../../../images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import { validationLogIn } from "./validationLogIn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../features/auth/authSlice";
import Button from "../../../components/ui/Button/Button";
import ErrorMessage from "../../../components/ui/ErrorMessage/ErrorMessage";

function Login() {
  const [visible, setVisibility] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const handlePasswordClick = () => {
    setVisibility(!visible);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setLoading(false);
      setErrorLogin(message);
    }
    if (isSuccess || user) {
      setLoading(false);
      navigate("/");
    }
    if (isLoading) {
      setLoading(true);
    }

    dispatch(reset());
  }, [user, isError, isLoading, isSuccess, message, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validationSchema: validationLogIn,
    onSubmit: (values) => {
      dispatch(login(values));
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
            <h4>Login pe Bookoutlet</h4>
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
          <Button
            type="submit"
            form="logInForm"
            name="Login"
            isLoading={loading}
          />
          <ErrorMessage error={errorLogin} />
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
              <Link to="/recover-password">Ai uitat parola?</Link>
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
            <Link to="/register">Nu ai cont? Creaza unul aici</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
