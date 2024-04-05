import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { getImageUrl } from "../../utils/images";
function BookImg({ bookImg, title, id }) {
  return (
    <Link className={styles.imgWrap} to={`/book/${id}`}>
      <picture>
        <img
          className={styles.bookImage}
          src={getImageUrl(bookImg)}
          alt={title}
        />
      </picture>
    </Link>
  );
}

export default BookImg;
