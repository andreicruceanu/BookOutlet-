import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { getImageUrl } from "../../utils/images";

function AuthorIteam({ author }) {
  return (
    author && (
      <div className={styles.authorIteam}>
        <div className={styles.authorIteamImg}>
          <Link
            to={`/autor/${author.url}`}
            title={author.value}
            className={styles.authorLink}
          >
            <img src={getImageUrl(author.imageUrl)} alt={author.value} />
          </Link>
        </div>
        <h2 className={styles.authorIteamTitle}>
          <Link to={`/autor/${author.url}`} title={author.value}>
            {author.value}
          </Link>
        </h2>
        <p className={styles.authorIteamText}>{author.books} produse</p>
      </div>
    )
  );
}

export default AuthorIteam;
