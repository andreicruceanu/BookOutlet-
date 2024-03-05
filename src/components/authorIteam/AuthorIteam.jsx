import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
import { API_URL_IMG } from "../../api/api-img";

function AuthorIteam({ dataAuthor }) {
  return (
    dataAuthor.length > 0 && (
      <div className={styles.authorWrap}>
        {dataAuthor?.map((author) => (
          <div className={styles.authorIteam} key={uuidv4()}>
            <div className={styles.authorIteamImg}>
              <Link
                to={`autor/${author.url}`}
                title={author.value}
                className={styles.authorLink}
              >
                <img
                  src={`${API_URL_IMG}${author.imageUrl}`}
                  alt={author.value}
                />
              </Link>
            </div>
            <h2 className={styles.authorIteamTitle}>
              <Link to={`autor/${author.url}`} title={author.value}>
                {author.value}
              </Link>
            </h2>
            <p className={styles.authorIteamText}>{author.books} produse</p>
          </div>
        ))}
      </div>
    )
  );
}

export default AuthorIteam;
