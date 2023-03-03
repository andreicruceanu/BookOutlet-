import styles from "./styles.module.css";
function BookPrice({ price, oldPrice }) {
  return (
    <div className={styles.priceBook}>
      <span className={styles.priceOld}>PRP: {oldPrice} Lei</span>
      <p className={styles.priceNew}>{price} Lei</p>
    </div>
  );
}

export default BookPrice;
