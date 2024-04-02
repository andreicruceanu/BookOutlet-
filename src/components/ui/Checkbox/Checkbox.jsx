import styles from "./styles.module.css";

const Checkbox = ({ type = "checkbox", name, label, formik, ...props }) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  return (
    <>
      <div className={styles.wrap_checkbox}>
        <input
          className={styles.checkbox_primary}
          type={type}
          name={name}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      {errors[name] && touched[name] && (
        <span className={styles.errorMessage}>{errors[name]}</span>
      )}
    </>
  );
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
