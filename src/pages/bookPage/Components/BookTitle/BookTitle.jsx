import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const BookTitle = ({ title, subtitle, authors }) => {
  return (
    <div className={styles.detailsTitle}>
      {authors &&
        authors?.map((author) => (
          <Link key={author.authorId} to={`/autor/${author.url}`}>
            {author.name}
          </Link>
        ))}
      <h1 className={styles.bookTitle}>{title}</h1>
      <span className={styles.bookSubTitle}>{subtitle}</span>
    </div>
  );
};

export default BookTitle;
