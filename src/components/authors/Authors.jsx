import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import AuthorIteam from "../authorIteam/AuthorIteam";
import { HiArrowLongRight } from "react-icons/hi2";
import authorApi from "../../api/modules/author.api";
import { toast } from "react-toastify";
const Autors = function () {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const authorsData = async () => {
      const { response, err } = await authorApi.getAuthorImportance();
      if (response) {
        setAuthors(response);
      }
      if (err) {
        toast.error(err.message);
      }
    };

    authorsData();
  }, []);

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
