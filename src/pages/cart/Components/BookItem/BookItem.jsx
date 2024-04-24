import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { API_URL_IMG } from "../../../../api/api-img";
import {
  addToCartReducer,
  decreaseCart,
  remove,
} from "../../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(remove(book));
  };

  const handleDecreaseCart = (book) => {
    dispatch(decreaseCart(book));
  };
  const handleAddToCart = (book) => {
    dispatch(addToCartReducer(book));
  };
  return (
    <div className={styles.cartItem} key={book._id}>
      <div className={styles.book}>
        <Link to={`/book/${book._id}`}>
          <img
            src={`${API_URL_IMG}${book.mainImageUrl}`}
            alt={book.item}
            className={styles.cartBookImg}
          />
        </Link>
        <div className={styles.bookTitleWrap}>
          <div className={styles.bookTitle}>
            <Link to={`/book/${book._id}`}>
              <h2>{book.title}</h2>
            </Link>
            <p>{book.subtitle}</p>
          </div>
          <div className={styles.quantity}>
            <button onClick={() => handleDecreaseCart(book)}>-</button>
            <div className={styles.totalQuantity}>{book.quantity}</div>
            <button onClick={() => handleAddToCart(book)}>+</button>
          </div>
        </div>
      </div>
      <div className={styles.itemPrice}>
        <p className={styles.oldPrice}>
          PRP: {Number(book.oldPrice * book.quantity).toFixed(2)} Lei
        </p>
        <p className={styles.newPrice}>
          {Number(book.totalPrice).toFixed(2)} Lei
        </p>
        <p className={styles.savePrice}>
          Econumisesti:
          {Number((book.oldPrice - book.price) * book.quantity).toFixed(2)} Lei
        </p>
        <span
          className={styles.removeBook}
          onClick={() => handleRemoveBook(book)}
        >
          Sterge
        </span>
      </div>
    </div>
  );
};

export default BookItem;
