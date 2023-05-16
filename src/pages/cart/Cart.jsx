import styles from "./styles.module.css";
import CartEmpty from "../../images/nu-ai-produse-in-cos.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL_IMG } from "../../api/api-img";
import { remove } from "../../features/cart/cartSlice";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(remove(book));
  };

  return (
    <main>
      {cart?.length > 0 ? (
        <div className={styles.containerCart}>
          <h2 className={styles.cartTitle}>Coșul meu</h2>
          <div className={styles.cartWrapper}>
            <div className={styles.cartDetails}>
              <h2 className={styles.cartSubtitle}>Produse din coș</h2>
              {cart.map((book) => (
                <div className={styles.cartItem} key={book._id}>
                  <div className={styles.book}>
                    <Link to={book.url}>
                      <img
                        src={`${API_URL_IMG}${book.mainImageUrl}`}
                        alt={book.item}
                        className={styles.cartBookImg}
                      />
                    </Link>
                    <div className={styles.bookTitleWrap}>
                      <div className={styles.bookTitle}>
                        <h2>{book.title}</h2>
                        <p>{book.subtitle}</p>
                      </div>
                      <div className={styles.quantity}>
                        <button>-</button>
                        <div className={styles.totalQuantity}>1</div>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.itemPrice}>
                    <p className={styles.oldPrice}>
                      PRP: {Number(book.oldPrice).toFixed(2)} Lei
                    </p>
                    <p className={styles.newPrice}>
                      {Number(book.price).toFixed(2)} Lei
                    </p>
                    <p className={styles.savePrice}>
                      Econumisesti:{" "}
                      {Number(book.oldPrice - book.price).toFixed(2)} Lei
                    </p>
                    <span
                      className={styles.removeBook}
                      onClick={() => handleRemoveBook(book)}
                    >
                      Sterge
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartAside}></div>
          </div>
        </div>
      ) : (
        <div className={styles.containerEmptyCart}>
          <div className={styles.emptyCart}>
            <div className={styles.wrap}>
              <img src={CartEmpty} alt="Empty Cart" width={100} />
              <h3>Nu ai produse in coș.</h3>
              <Link to={"/"} className={styles.btnEmptyCart}>
                Continuă cumpărăturile
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
