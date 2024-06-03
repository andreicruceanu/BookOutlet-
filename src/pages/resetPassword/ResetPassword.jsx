import * as Yup from "yup";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../features/auth/authSlice";
import Input from "../../components/ui/Input/Input";
import { toast } from "react-toastify";
import { getError } from "../../utils/getError";
import Button from "../../components/ui/Button/Button";

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

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      toast.error(getError(message));
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
            <Input
              id="email"
              type="email"
              value={email}
              disabled={true}
              formik={formik}
            />
            <Input
              id="password"
              type="password"
              placeholder="Parola"
              name="password"
              formik={formik}
            />
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirmarea parolei"
              name="confirmPassword"
              formik={formik}
            />
            <div>
              <Button
                type="submit"
                name="Resetare parola"
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
