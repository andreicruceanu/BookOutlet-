import React, { useEffect } from "react";

import { formLoginCheckbox, formLoginInput } from "./dataForm";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useFormik } from "formik";
import { validationLogIn } from "./validationLogIn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../features/auth/authSlice";

import Button from "../../../components/ui/Button/Button";
import Logo from "../../../images/logo.svg";
import ErrorMessage from "../../../components/ui/ErrorMessage/ErrorMessage";
import Input from "../../../components/ui/Input/Input";
import Checkbox from "../../../components/ui/Checkbox/Checkbox";
import content from "../../../constants/content";
import styles from "./styles.module.css";

function Login() {
  const [errorLogin, setErrorLogin] = useState(null);
  const [loading, setLoading] = useState(false);

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
            <h4>{content.login_title}</h4>
            <p>{content.login_subtitle}</p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            id="logInForm"
            className={styles.containerInput}
          >
            {formLoginInput.map((input) => (
              <Input
                key={input.id}
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                formik={formik}
              />
            ))}
          </form>
          <Button
            type="submit"
            form="logInForm"
            name="Login"
            isLoading={loading}
          />
          <ErrorMessage error={errorLogin} />
          <div className={styles.containerRememberMe}>
            {formLoginCheckbox.map((checkbox) => (
              <Checkbox
                key={checkbox.id}
                id={checkbox.id}
                className="my-0"
                type={checkbox.type}
                label={checkbox.label}
                name={checkbox.name}
                formik={formik}
              />
            ))}
            <span>
              <Link to="/recover-password">{content.forgot_password}</Link>
            </span>
          </div>
          <div className={styles.googleWrap}>
            <p className={styles.signinSep}>{content.or}</p>
            <h3>{content.login_with}</h3>
            <div className={styles.googleLogin}>
              <a href="/">
                <FcGoogle />
                <span className={styles.btnGoogleText}>
                  {content.continue_with_google}
                </span>
              </a>
            </div>
            <Link to="/register">{content.no_account}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
