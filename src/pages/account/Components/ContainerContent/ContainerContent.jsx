import styles from "./styles.module.css";
const ContainerContent = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContainerContent;
