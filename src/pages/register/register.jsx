import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationCreateAccount } from "./validationCreateAccount";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";
import { formRegisterCheckbox, formRegisterInput } from "./dataForm";

import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import Button from "../../components/ui/Button/Button";
import content from "../../constants/content";
import Input from "../../components/ui/Input/Input";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import styles from "./styles.module.css";

function Register() {
  const [isLoadingButton, setIsLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
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
      setErrorRegister(message);
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
            {content.enter_the_account}
          </Link>
          <h4>{content.create_account_title}</h4>
          <p>{content.create_account_subtitle}</p>
          <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className={styles.containerInput}
            id="createAccountForm"
          >
            {formRegisterInput.map((input) => (
              <Input
                key={input.id}
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                formik={formik}
              />
            ))}
            {formRegisterCheckbox.map((checkbox) => (
              <Checkbox
                key={checkbox.id}
                id={checkbox.id}
                type={checkbox.type}
                label={checkbox.label}
                name={checkbox.name}
                formik={formik}
              />
            ))}
          </form>
          <Button
            type="submit"
            name={content.create_account}
            isLoading={isLoadingButton}
            form="createAccountForm"
          />
          <ErrorMessage error={errorRegister} />
        </div>
      </div>
    </main>
  );
}

export default Register;
