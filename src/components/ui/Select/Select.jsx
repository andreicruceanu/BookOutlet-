import styles from "./styles.module.css";

const Select = ({ className, name, formik, options, ...props }) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  const combinedClassName = className
    ? `${className} ${styles.wrap}`
    : `${styles.wrap}`;

  return (
    <>
      <div className={combinedClassName}>
        <select
          className={styles.input_primary}
          name={name}
          value={values[name] || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        >
          <option value="" disabled hidden></option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {errors[name] && touched[name] && (
        <span className={styles.errorMessage}>{errors[name]}</span>
      )}
    </>
  );
};

Select.displayName = "Select";

export default Select;
