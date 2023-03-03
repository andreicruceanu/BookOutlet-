import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import { validationCreateAccount } from "./validationCreateAccount";
import axios from "axios";
import React from "react";
import styles from "./styles.module.css";

function Register() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibilityConfirmPassword] =
    useState(false);

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
      offer: false,
    },

    //Validation Form
    validationSchema: validationCreateAccount,

    //Submit Form
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post("/api/auth/register", values, {
          header: { "Content-Type": "aplication/json" },
          withCredentials: true,
        });
        console.log(JSON.stringify(response?.data));
      } catch (error) {
        if (!error.response) {
          console.log("server Error");
        }
      }
    },
  });

  return (
    <main>
      <div className={styles.wrapper}>
        <div className={styles.create__account__wrap}>
          <a className={styles.back} href="/login">
            <IoIosArrowBack />
            Inapoi
          </a>
          <h4>Creare cont nou pe Bookzone.ro</h4>
          <p>Completeaza datele noului tau cont Bookzone.</p>
          <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className={styles.container__input}
            id="createAccountForm"
          >
            <input
              className={styles.input__signin}
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
              className={styles.input__signin}
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
              className={styles.input__signin}
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
            <div className={styles.password__container}>
              <input
                className={styles.input__signin}
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

            <div className={styles.password__container}>
              <input
                className={styles.input__signin}
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
              name="offer"
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
          >
            Creaza cont
          </button>
          <span>{formik.errors.length > 0 ? formik.errors : null}</span>
        </div>
      </div>
    </main>
  );
}

export default Register;
