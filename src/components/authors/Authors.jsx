import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import AuthorIteam from "../authorIteam/AuthorIteam";
import { HiArrowLongRight } from "react-icons/hi2";
const Autors = function () {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const authorsData = async () => {
      const response = await axios.get("/api/author/importance");
      console.log(response);
      if (response.status === 200) {
        setAuthors(response.data);
      } else {
        console.log("A aparut o eroare la apelarea datelor ");
      }
    };

    authorsData();
  }, []);

  console.log(authors);

  return (
    <>
      {authors.length > 0 && (
        <section className={styles.containerAuthors}>
          <div className={styles.homeAuthors}>
            <div className={styles.authorsTitleWrap}>
              <h2>Autorii Bookzone</h2>
              <Link to={"/autori"}>
                <span className={styles.mr5}>Vezi toti autorii</span>
                <HiArrowLongRight className={styles.iconArrowRight} />
              </Link>
            </div>
            <AuthorIteam dataAuthor={authors} />
          </div>
        </section>
      )}
    </>
  );
};

export default Autors;
