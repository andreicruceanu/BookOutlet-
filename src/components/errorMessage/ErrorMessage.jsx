import styles from "./styles.module.css";

function ErrorMessage({ value }) {
  return <span className={styles.errorMessage}>{value}</span>;
}

export default ErrorMessage;
