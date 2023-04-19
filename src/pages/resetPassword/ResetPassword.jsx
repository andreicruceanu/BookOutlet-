import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { useFormik } from "formik";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../features/auth/authSlice";

function ResetPassword() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibilityConfirmPassword] =
    useState(false);

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVisibleButtonPasswordClick = () =>
    setVisiblePassword((currentVisible) => !currentVisible);
  const handleVisibleButtonConfirmPasswordClick = () =>
    setVisibilityConfirmPassword(
      (currentVisibleConfirmPassword) => !currentVisibleConfirmPassword
    );

  const validationPassword = Yup.object({
    password: Yup.string()
      .required("Parola este obligatorie")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
        "Parola trebuie să aibă cel puțin 8 caractere, literă mare, literă mică, un număr și un caracter special"
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationPassword,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: token, userData: values }));
    },
  });
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEmail(params.get("email"));
    setToken(params.get("key"));

    if (isError) {
      setError(message);
    }
    if (isSuccess) {
      navigate("/login");
    }
  }, [navigate, isError, isSuccess, message]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to={"/"}>
          <img src={Logo} alt="Logo_img" />
        </Link>
        <div className={styles.loginBox}>
          <div className={styles.loginBoxTitle}>
            <h4>Completează noua parolă</h4>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className={styles.containerInput}
          >
            <input
              id="email"
              type="email"
              className={styles.inputCreateAccount}
              value={email}
              disabled={true}
            />
            <div className={styles.passwordContainer}>
              <input
                className={styles.inputCreateAccount}
                type={visiblePassword ? "text" : "password"}
                placeholder="Parola"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span onClick={handleVisibleButtonPasswordClick}>
                {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <div className={styles.passwordContainer}>
              <input
                className={styles.inputCreateAccount}
                type={visibleConfirmPassword ? "text" : "password"}
                placeholder="Confirmarea parolei"
                name="confirmPassword"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span onClick={handleVisibleButtonConfirmPasswordClick}>
                {visibleConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </div>
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <span className={styles.errorMessage}>
                {formik.errors.confirmPassword}
              </span>
            ) : (
              ""
            )}
            <div>
              <button type="submit" className={styles.btn}>
                Resetare parola
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
