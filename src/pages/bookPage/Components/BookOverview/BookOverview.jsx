import { CiPercent } from "react-icons/ci";
import styles from "./styles.module.css";
const BookOverview = ({ shortDescription, promoDescription }) => {
  return (
    <div className={styles.detailsPricingBox}>
      <div className={styles.detailsBonus}>
        <div className={styles.detailsBonusText}>
          <div
            className={styles.textBook}
            dangerouslySetInnerHTML={{
              __html: shortDescription,
            }}
          ></div>
        </div>
      </div>
      {promoDescription && (
        <div className={styles.detailsBonusSticker}>
          <div
            className={styles.promoDescriptionText}
            dangerouslySetInnerHTML={{
              __html: promoDescription,
            }}
          ></div>
          <CiPercent />
        </div>
      )}
    </div>
  );
};

export default BookOverview;
