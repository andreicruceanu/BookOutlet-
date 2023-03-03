import { AiFillStar } from "react-icons/ai";
import { IoInformationCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import BookInfoCarousel from "../../components/bookInfoCarousel/BookInfoCarousel";
import BookStar from "../../components/bookStar/BookStar";
import styles from "./styles.module.css";
function BookInfo() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.carousel}>
            <BookInfoCarousel />
          </div>
          <div className={styles.details}>
            <div className={styles.detailsTitle}>
              <Link to={"/"}>Constantin Dulcan </Link>
              <Link to={"/"}>Florentina Fântânaru</Link>
              <h1 className={styles.bookTitle}>Calea vindecarii</h1>
              <span className={styles.bookSubTitle}>
                Pacea dintre inima si minte
              </span>
            </div>
            <div className={styles.detailsIofo}>
              <div className={styles.detailsInfoRating}>
                <div className={styles.detailsInfoStar}>
                  <BookStar rating={3} />
                </div>
                <Link to={"#text"} className={styles.detailsInfoReview}>
                  5 (6 review-uri)
                </Link>
              </div>
              <div className="detailsInfoPrice">
                <div className="oldPrice">
                  <span>PRP: 79 Lei</span>
                  <span>
                    <IoInformationCircleSharp />
                    <span>
                      Acesta este Prețul Recomandat de Producător. Prețul de
                      vânzare al produsului este afișat mai jos.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookInfo;
