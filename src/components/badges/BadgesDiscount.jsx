import styles from "./stylesDiscount.module.css";
function BadgesDiscount({ oldPrice, price, leftPosition, bottomPosition }) {
  const reducere = ((oldPrice - price) / oldPrice).toFixed(3) * 100;
  return (
    <div
      className={styles.badgesWrap}
      style={{ "--left": leftPosition, "--bottom": bottomPosition }}
    >
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
