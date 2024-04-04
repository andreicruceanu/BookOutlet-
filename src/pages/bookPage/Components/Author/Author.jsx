import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ReadMore from "../../../author-Details/readMore";
import { API_URL_IMG } from "../../../../api/api-img";
import { HiArrowLongRight } from "react-icons/hi2";

const Author = ({ author }) => {
  return (
    <div className={styles.container}>
      <h2>Despre {author.name}</h2>
      <div className={styles.authorWrap}>
        <img
          src={`${API_URL_IMG}/${author.imageUrl}`}
          alt={author.name}
          width={200}
          height={200}
        />
        <div className={styles.authorDetails}>
          <h3>Biografie</h3>
          <ReadMore text={author.description} maxHeight={310} />
          <Link to={`/autor/${author.url}`} className={styles.authorPageLink}>
            <HiArrowLongRight /> Vezi pagina autorului
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Author;
