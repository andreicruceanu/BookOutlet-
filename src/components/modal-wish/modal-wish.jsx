import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { API_URL_IMG } from "../../api/api-img";
import { removeFavorite, setModalNoUser } from "../../features/auth/authSlice";
import favoriteApi from "../../api/modules/favorite.api";
import { addToCartReducer } from "../../features/cart/cartSlice";

function ModalWish({ onClose }) {
  const { listFavorite, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleBookDelete = async (book) => {
    if (!user) {
      return dispatch(setModalNoUser(true));
    }
    const { response, err } = await favoriteApi.remove({
      favoriteId: book._id,
    });

    if (err) return console.log(err);
    if (response) {
      dispatch(removeFavorite(book));
    }
  };
  const handleAddToCart = (book) => {
    const { title, subtitle, url, price, oldPrice, mainImageUrl } = book;
    const _id = book.bookId;

    const bookCart = {
      _id,
      title,
      subtitle,
      url,
      mainImageUrl,
      oldPrice,
      price,
    };
    dispatch(addToCartReducer(bookCart));
  };

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
                  alt={`${book.title}`}
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
                      PRP: {book.oldPrice} lei
                    </span>
                    <span className={styles.price}> {book.price} lei</span>
                    <span
                      className={styles.btnCart}
                      onClick={() => handleAddToCart(book)}
                    >
                      <BsCartPlus />
                      Adauga in cos
                    </span>
                    <span
                      className={styles.btnRemove}
                      onClick={() => handleBookDelete(book)}
                    >
                      Sterge
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {listFavorite.length > 0 ? (
          <div className={styles.boxWishButton}>
            <Link className={styles.btnWish} to={"/account/favorite"}>
              Vezi toate produsele favorite
            </Link>
          </div>
        ) : (
          <span>
            <p className={styles.basketEmpty}>Nu ai produse favorite</p>
          </span>
        )}
      </div>
    </>
  );
}

export default ModalWish;
