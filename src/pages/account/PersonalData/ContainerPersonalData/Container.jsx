import styles from "./styles.module.css";

const Container = ({ title, children }) => {
  return (
    <div className={styles.personalDataWrap}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
};

export default Container;
