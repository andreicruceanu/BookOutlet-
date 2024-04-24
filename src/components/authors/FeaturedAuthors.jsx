import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HiArrowLongRight } from "react-icons/hi2";

import AuthorIteam from "../authorIteam/AuthorIteam";
import endpoints from "../../api/endpoints";
import useFetchCached from "../../hooks/useFetchCached";
import styles from "./styles.module.css";

const FeaturedAuthors = function () {
  const { data: authors, error } = useFetchCached(endpoints.featuredAuthors);

  if (error) {
    return toast.error(error);
  }

  return (
    <>
      {authors && (
        <section className={styles.containerAuthors}>
          <div className={styles.homeAuthors}>
            <div className={styles.authorsTitleWrap}>
              <h2>Autorii Bookzone</h2>
              <Link to={"/autori"}>
                <span className={styles.mr5}>Vezi toti autorii</span>
                <HiArrowLongRight className={styles.iconArrowRight} />
              </Link>
            </div>
            <div className={styles.authorWrap}>
              {authors.map((author) => (
                <AuthorIteam author={author} key={author._id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FeaturedAuthors;
