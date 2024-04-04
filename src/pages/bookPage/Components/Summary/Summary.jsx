import styles from "./styles.module.css";
import GiftImg from "../../../../images/Cadou.jpg";

const Summary = ({ title, description, authors }) => {
  return (
    <div className={styles.descriptionWrap}>
      <div className={styles.description}>
        <h2>
          Rezumat {title} - {authors.map((author) => author.name).join(", ")}
        </h2>
        <div className={styles.descriptionContent}>
          <div
            id="descriere"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            className={styles.descriptionText}
          ></div>
        </div>
      </div>
      <div className={styles.banner}>
        <img src={GiftImg} alt="Gift" />
      </div>
    </div>
  );
};

export default Summary;
