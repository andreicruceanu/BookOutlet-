import React from "react";
import styles from "./styles.module.css";
import errorsMessages from "../../constants/errorsMessages.json";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ImSpinner8 } from "react-icons/im";
import { validationCreateAccount } from "./validationCreateAccount";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";

function Register() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibilityConfirmPassword] =
    useState(false);
  const [isLoadingButton, setIsLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleVisibleButtonPasswordClick = () =>
    setVisiblePassword((currentVisible) => !currentVisible);
  const handleVisibleButtonConfirmPasswordClick = () =>
    setVisibilityConfirmPassword(
      (currentVisibleConfirmPassword) => !currentVisibleConfirmPassword
    );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      newsletter: false,
    },

    //Validation Form
    validationSchema: validationCreateAccount,

    //Submit Form
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  useEffect(() => {
    if (isError) {
      setIsLoading(false);
      setErrorLogin(message);
    }
    if (isSuccess || user) {
      setIsLoading(false);
      navigate("/");
    }
    if (isLoading) {
      setIsLoading(true);
    }

    dispatch(reset());
  }, [user, isError, isLoading, isSuccess, message, navigate, dispatch]);

  return (
    <main>
      <div className={styles.wrapper}>
        <div className={styles.createAccountWrap}>
          <Link className={styles.back} to="/login">
            <IoIosArrowBack />
            Intra in cont
          </Link>
          <h4>Creare cont nou pe Bookzone.ro</h4>
          <p>Completeaza datele noului tau cont Bookzone.</p>
          <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className={styles.containerInput}
            id="createAccountForm"
          >
            <input
              className={styles.inputCreateAccount}
              type="text"
              name="lastName"
              placeholder="Numele tau"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched.lastName ? (
              <span className={styles.errorMessage}>
                {formik.errors.lastName}
              </span>
            ) : (
              ""
            )}

            <input
              className={styles.inputCreateAccount}
              type="text"
              name="firstName"
              placeholder="Prenumele tau"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <span className={styles.errorMessage}>
                {formik.errors.firstName}
              </span>
            ) : (
              ""
            )}

            <input
              className={styles.inputCreateAccount}
              type="email"
              name="email"
              placeholder="Email-ul tau"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <span className={styles.errorMessage}>{formik.errors.email}</span>
            ) : (
              ""
            )}
            <div className={styles.passwordContainer}>
              <input
                className={styles.inputCreateAccount}
                type={visiblePassword ? "text" : "password"}
                placeholder="Parola"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span onClick={handleVisibleButtonPasswordClick}>
                {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className={styles.errorMessage}>
                {formik.errors.password}
              </span>
            ) : (
              ""
            )}

            <div className={styles.passwordContainer}>
              <input
                className={styles.inputCreateAccount}
                type={visibleConfirmPassword ? "text" : "password"}
                placeholder="Confirmarea parolei"
                name="confirmPassword"
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
          </form>
          <div className={styles.terms__wrap}>
            <input
              type="checkbox"
              className={styles.input__checkbox}
              name="terms"
              id="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="terms">
              Am citit si sunt de acord cu termenii si conditiile
            </label>
          </div>
          {formik.errors.terms && formik.touched.terms ? (
            <span className={styles.errorMessage}>{formik.errors.terms}</span>
          ) : (
            ""
          )}
          <div className={`${styles.terms__wrap} ${styles.mb__2}`}>
            <input
              type="checkbox"
              className={styles.input__checkbox__confirmation}
              name="newsletter"
              id="confirmation"
              onChange={formik.handleChange}
            />
            <label htmlFor="confirmation">
              CONFIRM CA AM PESTE 16 ANI si doresc sa primesc cele mai noi
              oferte
            </label>
          </div>
          <button
            type="submit"
            form="createAccountForm"
            className={`${styles.btn} ${styles.mb__1}`}
            disabled={isLoadingButton}
          >
            {isLoadingButton ? (
              <span className={styles.iconContainer}>
                <ImSpinner8 />
              </span>
            ) : (
              <span>Creaza cont</span>
            )}
          </button>
          {errorLogin &&
          errorLogin.errorCode &&
          errorsMessages[errorLogin.errorCode] ? (
            <span className={styles.errorMessageRegister}>
              {errorsMessages[errorLogin.errorCode]}
            </span>
          ) : errorLogin?.errorMessage ? (
            <span className={styles.errorMessageRegister}>
              {errorLogin.errorMessage}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
}

export default Register;
