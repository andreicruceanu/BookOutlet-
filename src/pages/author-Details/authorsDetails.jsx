import { useParams } from "react-router";
import { API_URL_IMG } from "../../api/api-img";
import { useAuthorDetails } from "../../hooks/fetch-author-details";
import { toast } from "react-toastify";
import ReadMore from "./readMore";
import styles from "./styles.module.css";

function AuthorsDetails() {
  const { id } = useParams();
  const { author, error } = useAuthorDetails({ id });

  if (error) {
    toast.error(error.message);
  }

  return (
    <main>
      {author && (
        <div className={styles.container}>
          <div className={styles.wrap}>
            <h1 className={styles.authorName}> {author?.value}</h1>
            <div className={styles.avatar}>
              <img src={`${API_URL_IMG}${author?.imageUrl}`} alt="Text" />
            </div>
            <ReadMore text={author?.description} maxHeight={310} />
          </div>
        </div>
      )}
    </main>
  );
}

export default AuthorsDetails;
