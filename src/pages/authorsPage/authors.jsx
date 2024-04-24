import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import endpoints from "../../api/endpoints";
import useFetchCached from "../../hooks/useFetchCached";
import Spinner from "../../components/Spinner/Spinner";
import useScrollTop from "../../hooks/useScrollTop";
import AuthorIteam from "../../components/authorIteam/AuthorIteam";

const Authors = () => {
  const [query, setQuery] = useState("");
  useScrollTop();

  const {
    data: authors,
    isLoading,
    error,
  } = useFetchCached(endpoints.authorsAll);

  if (error) {
    toast.error(error.message);
  }

  return (
    <main>
      <div className={`${styles.authorsTitle} ${styles.container}`}>
        <h2>Autori BookOutlet</h2>
      </div>
      {isLoading ? (
        <div className={styles.containerLoader}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.authorsMain}>
          <div className={styles.searchAuthorWrap}>
            <input
              type="text"
              placeholder="Cauta un autor"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={styles.authorsMainWrap}>
            {authors?.length > 0 &&
              authors
                .filter((author) => author.value.toLowerCase().includes(query))
                .map((author) => (
                  <AuthorIteam author={author} key={author._id} />
                ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Authors;
