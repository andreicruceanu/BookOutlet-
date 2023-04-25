import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function BookTitle({ title, id }) {
  return (
    <Link to={`/book/${id}`} className={styles.titleLink}>
      <h2 className={styles.bookTitle}>{title}</h2>
    </Link>
  );
}
export default BookTitle;
