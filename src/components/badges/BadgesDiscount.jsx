import styles from "./stylesDiscount.module.css";
function BadgesDiscount({ oldPrice, price }) {
  const reducere = ((oldPrice - price) / oldPrice).toFixed(3) * 100;
  return (
    <div className={styles.badgesWrap}>
      <div className={styles.badgesDiscount}>
        <p className={styles.badgesText}>
          {reducere &&
            `-${Number.isInteger(reducere) ? reducere : reducere.toFixed(1)} %`}
        </p>
      </div>
    </div>
  );
}

export default BadgesDiscount;
