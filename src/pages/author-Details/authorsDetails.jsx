import { useParams } from "react-router";
import { getImageUrl } from "../../utils/images";

import ReadMore from "./readMore";
import styles from "./styles.module.css";
import useFetch from "../../hooks/useFetch";
import endpoints from "../../api/endpoints";
import DataRenderer from "../../components/DataRenderer/DataRenderer";
import useScrollTop from "../../hooks/useScrollTop";

function AuthorsDetails() {
  const { id } = useParams();

  useScrollTop();

  const {
    data: author,
    error,
    isLoading,
  } = useFetch(endpoints.authorDetails(id));

  return (
    <main>
      <DataRenderer isLoading={isLoading} error={error}>
        {author && (
          <div className={styles.container}>
            <div className={styles.wrap}>
              <h1 className={styles.authorName}>{author?.value}</h1>
              <div className={styles.avatar}>
                <img src={getImageUrl(author.imageUrl)} alt="Text" />
              </div>
              <ReadMore text={author?.description} maxHeight={310} />
            </div>
          </div>
        )}
      </DataRenderer>
    </main>
  );
}

export default AuthorsDetails;
