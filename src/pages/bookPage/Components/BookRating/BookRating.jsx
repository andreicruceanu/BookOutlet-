import { Link } from "react-router-dom";
import BookStar from "../../../../components/bookStar/BookStar";
import styles from "./styles.module.css";
const BookRating = ({ rating }) => {
  return (
    <div className={styles.detailsInfoRating}>
      <div className={styles.detailsInfoStar}>
        <BookStar rating={rating.rating} />
      </div>
      <Link to={"reviews"} className={styles.detailsInfoReview}>
        {`${
          Number.isInteger(rating.rating)
            ? rating.rating
            : Number(rating.rating).toFixed(2)
        } (${rating.totalReviews} review-uri)`}
      </Link>
    </div>
  );
};

export default BookRating;
