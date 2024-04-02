import errorsMessages from "../../../constants/errorsMessages.json";
import styles from "./styles.module.css";

const ErrorMessage = ({ error, className }) => {
  const combinedClassName = className
    ? `${className} ${styles.error}`
    : `${styles.error}`;

  return error && error.errorCode && errorsMessages[error.errorCode] ? (
    <span className={combinedClassName}>{errorsMessages[error.errorCode]}</span>
  ) : error?.errorMessage ? (
    <span className={combinedClassName}>{error.errorMessage}</span>
  ) : (
    ""
  );
};

export default ErrorMessage;
