import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function BookImg({ bookImg }) {
  return (
    <Link className={styles.imgWrap} to={"/"}>
      <picture>
        <source srcSet={bookImg} type="image/webp" />
        <img className={styles.bookImage} src={bookImg} alt={bookImg.title} />
      </picture>
    </Link>
  );
}

export default BookImg;
