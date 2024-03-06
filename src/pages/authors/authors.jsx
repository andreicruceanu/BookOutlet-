import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL_IMG } from "../../api/api-img";
import { useAuthorAll } from "../../hooks/fetch-author-all";
import { toast } from "react-toastify";
import styles from "./styles.module.css";

function Authors() {
  const [query, setQuery] = useState("");

  const { author, error } = useAuthorAll();

  if (error) {
    toast.error(error.message);
  }

  return (
    <main>
      <div className={`${styles.authorsTitle} ${styles.container}`}>
        <h2>Autori BookOutlet</h2>
      </div>

      <div className={styles.authorsMain}>
        <div className={styles.searchAuthorWrap}>
          <input
            type="text"
            placeholder="Cauta un autor"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.authorsMainWrap}>
          {author?.length > 0 &&
            author
              .filter((author) => author.value.toLowerCase().includes(query))
              .map((author) => (
                <div className={styles.author} key={author._id}>
                  <div className={styles.authorAvatar}>
                    <Link to={`/autor/${author.url}`}>
                      <img
                        className={styles.authorImg}
                        src={`${API_URL_IMG}${author.imageUrl}`}
                        alt={author.value}
                        title={author.value}
                      />
                    </Link>
                  </div>
                  <div className={styles.authorContent}>
                    <div className={styles.titleWrap}>
                      <h3>{author.value}</h3>
                    </div>
                    <div className={styles.numberBook}>
                      <p>{author.books}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </main>
  );
}

export default Authors;
