import styles from "./styles.module.css";
import { AiTwotoneStar } from "react-icons/ai";
function BookStar({ rating }) {
  const stars = Math.round(rating);

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiTwotoneStar className={styles.starFull} />
        ) : (
          <AiTwotoneStar />
        )}
      </span>
    );
  });

  return <div className={styles.containerStar}>{ratingStar}</div>;
}

export default BookStar;
