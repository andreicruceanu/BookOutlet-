import { useState } from "react";

import styles from "./styles.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
  className,
  type = "text",
  name,
  placeholder,
  formik,
  ...props
}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { values, handleChange, handleBlur, errors, touched } = formik;

  const togglePasswordVisibility = () => {
    setVisiblePassword((prevState) => !prevState);
  };
  const combinedClassName = className
    ? `${className} ${styles.wrap}`
    : `${styles.wrap}`;

  return (
    <>
      <div className={combinedClassName}>
        <input
          className={styles.input_primary}
          type={
            type === "password" ? (visiblePassword ? "text" : "password") : type
          }
          name={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        {type === "password" && (
          <span onClick={togglePasswordVisibility}>
            {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        )}
      </div>
      {errors[name] && touched[name] && (
        <span className={styles.errorMessage}>{errors[name]}</span>
      )}
    </>
  );
};

Input.displayName = "Input";

export default Input;
