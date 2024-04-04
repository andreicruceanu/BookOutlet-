import { IoInformationCircleSharp } from "react-icons/io5";
import styles from "./styles.module.css";
const BookPrice = ({ oldPrice, price }) => {
  return (
    <div className={styles.detailsInfoPrice}>
      <div className={styles.oldPrice}>
        <span className={styles.oldPriceValue}>PRP: {oldPrice} Lei</span>
        <span className={styles.oldPriceInfoWrap}>
          <IoInformationCircleSharp />
          <span className={styles.priceInfo}>
            Acesta este Prețul Recomandat de Producător. Prețul de vânzare al
            produsului este afișat mai jos.
          </span>
        </span>
      </div>
      <div className={styles.newPrice}>
        <span className={styles.newPriceValue}>{price} Lei</span>
      </div>
    </div>
  );
};

export default BookPrice;
