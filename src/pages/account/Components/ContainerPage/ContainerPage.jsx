import styles from "./styles.module.css";

const ContainerPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>{children}</div>
    </div>
  );
};

export default ContainerPage;
