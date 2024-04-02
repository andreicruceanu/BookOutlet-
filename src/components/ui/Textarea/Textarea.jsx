import styles from "./styles.module.css";

const Textarea = ({ className, name, placeholder, formik, rows, ...props }) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  const combinedClassName = className
    ? `${className} ${styles.wrap}`
    : `${styles.wrap}`;

  return (
    <>
      <div className={combinedClassName}>
        <textarea
          className={styles.input_primary}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
      </div>
      {errors[name] && touched[name] && (
        <span className={styles.errorMessage}>{errors[name]}</span>
      )}
    </>
  );
};

Textarea.displayName = "Textarea";

export default Textarea;
