import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { API_URL_IMG } from "../../api/api-img";
function BookImg({ bookImg, title, id }) {
  return (
    <Link className={styles.imgWrap} to={`/book/${id}`}>
      <picture>
        <source srcSet={`${API_URL_IMG}${bookImg}`} type="image/webp" />
        <img
          className={styles.bookImage}
          src={`${API_URL_IMG}${bookImg}`}
          alt={title}
        />
      </picture>
    </Link>
  );
}

export default BookImg;
