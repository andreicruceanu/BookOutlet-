import * as React from "react";
import { ImSpinner8 } from "react-icons/im";
import styles from "./styles.module.css";
const Button = React.forwardRef(
  (
    {
      className,
      classNameText,
      name,
      startIconImage,
      startIcon,
      size = "md",
      type = "button",
      variant = "primary",
      isLoading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const combinedClassName = className
      ? `${className} ${styles.button} ${styles[size]} ${styles[variant]}`
      : `${styles.button} ${styles[size]} ${styles[variant]}`;

    return (
      <button
        className={combinedClassName}
        ref={ref}
        type={type}
        disabled={isLoading || disabled}
        {...props}
      >
        {startIconImage && <img src={startIconImage} alt={name} />}
        {startIcon && startIcon}
        {isLoading && (
          <span className={styles.iconContainer}>
            <ImSpinner8 />
          </span>
        )}
        {!isLoading && <span className={classNameText}>{name}</span>}
      </button>
    );
  }
);

export default Button;
