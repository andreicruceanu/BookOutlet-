import { useState } from "react";

import styles from "./styles.module.css";
import endpoints from "../../api/endpoints";
import useFetchCached from "../../hooks/useFetchCached";
import useScrollTop from "../../hooks/useScrollTop";
import AuthorIteam from "../../components/authorIteam/AuthorIteam";
import DataRenderer from "../../components/DataRenderer/DataRenderer";

const Authors = () => {
  const [query, setQuery] = useState("");

  useScrollTop();
  const {
    data: authors,
    isLoading,
    error,
  } = useFetchCached(endpoints.authorsAll);

  return (
    <main>
      <div className={`${styles.authorsTitle} ${styles.container}`}>
        <h3>Autori BookOutlet</h3>
      </div>
      <DataRenderer isLoading={isLoading} error={error}>
        <div className={styles.authorsMain}>
          <div className={styles.authorsMainContainer}>
            <div className={styles.searchAuthorWrap}>
              <input
                type="text"
                placeholder="Cauta un autor"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
            </div>
            <div className={styles.authorsMainWrap}>
              {authors?.length > 0 &&
                authors
                  .filter((author) =>
                    author.value.toLowerCase().includes(query)
                  )
                  .map((author) => (
                    <AuthorIteam author={author} key={author._id} />
                  ))}
            </div>
          </div>
        </div>
      </DataRenderer>
    </main>
  );
};

export default Authors;
