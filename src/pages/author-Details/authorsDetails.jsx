import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL_IMG } from "../../api/api-img";
import ReadMore from "./readMore";
import styles from "./styles.module.css";

function AuthorsDetails() {
  const [author, setAuthor] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/author/${id}`);
      setAuthor(response.data);
    };

    fetchData();
  }, [id]);

  console.log(typeof author?.description);

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
