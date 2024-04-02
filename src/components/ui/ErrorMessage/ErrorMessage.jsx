import errorsMessages from "../../../constants/errorsMessages.json";
import styles from "./styles.module.css";

const ErrorMessage = ({ error }) => {
  return error && error.errorCode && errorsMessages[error.errorCode] ? (
    <span className={styles.error}>{errorsMessages[error.errorCode]}</span>
  ) : error?.errorMessage ? (
    <span className={styles.error}>{error.errorMessage}</span>
  ) : (
    ""
  );
};

export default ErrorMessage;
