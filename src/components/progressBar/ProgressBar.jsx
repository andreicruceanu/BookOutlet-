import styles from "./styles.module.css";

function ProgressBar({ priceBooks, freeShippingValue }) {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBarWrap}>
        <div className={styles.progressBarOuter}>
          <div
            className={styles.progressBarInner}
            style={{ maxWidth: `${(priceBooks / freeShippingValue) * 100}%` }}
          ></div>
        </div>
      </div>
      <span className={styles.ProgressBarText}>
        Transport GRATUIT de la {freeShippingValue} lei !
      </span>
    </div>
  );
}

export default ProgressBar;
