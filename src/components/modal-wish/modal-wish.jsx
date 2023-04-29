import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { API_URL_IMG } from "../../api/api-img";
function ModalWish({ onClose }) {
  const { listFavorite } = useSelector((state) => state.auth);

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.boxWish}>
        <div className={styles.wishHeader}>
          <h5>Favorite</h5>
          <span>{listFavorite.length} produs</span>
        </div>
        <div className={styles.boxContent}>
          {listFavorite.length > 0 &&
            listFavorite.map((book) => (
              <div className={styles.boxItem} key={book._id}>
                <img
                  className={styles.boxImg}
                  src={`${API_URL_IMG}${book.mainImageUrl}`}
                  alt={"Test"}
                />
                <div className={styles.containerBox}>
                  <div className={styles.boxTitle}>
                    <h3 className={styles.titleWrap}>
                      <Link to={`/book/${book.bookId}`}>
                        <span className={styles.titleText}>{book.title}</span>
                      </Link>
                    </h3>
                  </div>
                  <div className={styles.boxWrap}>
                    <span className={styles.oldPrice}>
                      {" "}
                      PRP: {book.oldPrice} lei
                    </span>
                    <span className={styles.price}> {book.price} lei</span>
                    <span className={styles.btnCart}>
                      <BsCartPlus />
                      Adauga in cos
                    </span>
                    <span className={styles.btnRemove}>Sterge</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.boxWishButton}>
          <Link className={styles.btnWish} to={"/account/favorite"}>
            Vezi toate produsele favorite
          </Link>
        </div>
      </div>
    </>
  );
}

export default ModalWish;
