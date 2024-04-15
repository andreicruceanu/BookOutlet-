import styles from "./styles.module.css";

const Radio = ({
  className,
  type = "radio",
  name,
  label,
  formik,
  value,
  id,
  ...props
}) => {
  const { values, handleChange } = formik;

  const combinedClassName = className
    ? `${className} ${styles.radio_primary}`
    : `${styles.radio_primary}`;

  return (
    <>
      <input
        className={combinedClassName}
        value={value}
        checked={values?.gender.toString() === value?.toString()}
        onChange={handleChange}
        type={type}
        name={name}
        {...props}
      />
      <label className={styles.genderLabelMr} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

Radio.displayName = "Radio";

export default Radio;
