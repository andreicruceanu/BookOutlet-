import styles from "./styles.module.css";
const ContainerSwiperBookStore = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.containerSwiperBooks}>{children}</div>
    </section>
  );
};

export default ContainerSwiperBookStore;
