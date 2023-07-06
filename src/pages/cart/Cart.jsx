import styles from "./styles.module.css";
import CartEmpty from "../../images/nu-ai-produse-in-cos.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL_IMG } from "../../api/api-img";
import { addToCartReducer, remove } from "../../features/cart/cartSlice";
import { decreaseCart } from "../../features/cart/cartSlice";
import checkoutBtn from "../../images/continua-finalizeaza-comanda.svg";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Cart() {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const freeShippingFrom = 200;

  const handleRemoveBook = (book) => {
    dispatch(remove(book));
  };

  const handleDecreaseCart = (book) => {
    dispatch(decreaseCart(book));
  };
  const handleAddToCart = (book) => {
    dispatch(addToCartReducer(book));
  };

  const discount = cart.reduce(
    (total, book) =>
      Number(total) + Number((book.oldPrice - book.price) * book.quantity),
    0
  );
  const totalPriceBooks = cart.reduce(
    (total, book) => Number(total) + Number(book.totalPrice),
    0
  );
  const processingPrice = 1.99;
  const priceDelivery = totalPriceBooks > freeShippingFrom ? 0 : 20;
  const orderFinalPrice = totalPriceBooks + priceDelivery + processingPrice;
  return (
    <main>
      {cart?.length > 0 ? (
        <div className={styles.containerCart}>
          <h2 className={styles.cartTitle}>Coșul meu</h2>
          <div className={styles.cartWrapper}>
            <div className={styles.cartDetails}>
              <h2 className={styles.cartSubtitle}>Produse din coș</h2>
              <ProgressBar
                priceBooks={totalPriceBooks}
                freeShippingValue={freeShippingFrom}
              />
              {cart.map((book) => (
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
                        <button onClick={() => handleDecreaseCart(book)}>
                          -
                        </button>
                        <div className={styles.totalQuantity}>
                          {book.quantity}
                        </div>
                        <button onClick={() => handleAddToCart(book)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.itemPrice}>
                    <p className={styles.oldPrice}>
                      PRP: {Number(book.oldPrice * book.quantity).toFixed(2)}{" "}
                      Lei
                    </p>
                    <p className={styles.newPrice}>
                      {Number(book.totalPrice).toFixed(2)} Lei
                    </p>
                    <p className={styles.savePrice}>
                      Econumisesti:{" "}
                      {Number(
                        (book.oldPrice - book.price) * book.quantity
                      ).toFixed(2)}{" "}
                      Lei
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
              <div className={styles.cartItemTotal}>
                <div className={styles.cartSubtotal}>
                  <p className={styles.cartSubtotalText}> Cost Produse: </p>
                  <p className={styles.cartSubtotalSum}>
                    {" "}
                    {totalPriceBooks.toFixed(2)} Lei
                  </p>
                </div>
                <div className={styles.cartDelivery}>
                  <p className={styles.cartSubtotalText}>Cost livrare:</p>
                  <p className={styles.cartSubtotalSum}>
                    {priceDelivery > 0
                      ? `${priceDelivery} Lei`
                      : `Transport gratuit`}
                  </p>
                </div>
                <div className={styles.cartSubtotal}>
                  <p className={styles.cartSubtotalText}>Cost procesare:</p>
                  <p className={styles.cartSubtotalSum}>
                    {processingPrice} Lei
                  </p>
                </div>
                <div className={styles.cartSubtotal}>
                  <p
                    className={`${styles.cartSubtotalText} ${styles.textBold}`}
                  >
                    Subtotal:
                  </p>
                  <p className={`${styles.cartSubtotalSum} ${styles.textBold}`}>
                    {orderFinalPrice.toFixed(2)} Lei
                  </p>
                </div>
              </div>
              {discount > 0 && (
                <div className={styles.totalDiscount}>
                  Felicitari, ai economisit {discount.toFixed(2)} lei!
                </div>
              )}
            </div>
            <div className={styles.cartAside}>
              <div className={styles.cartSummary}>
                <h2>Sumar comandă</h2>
                <div className={styles.content}>
                  <div className={styles.wrap}>
                    <p className={styles.summaryText}>Cost produse:</p>
                    <p className={styles.summarySum}>
                      {totalPriceBooks.toFixed(2)} Lei
                    </p>
                  </div>
                  <div className={styles.wrap}>
                    <p className={styles.summaryText}>Cost livrare:</p>
                    <p className={styles.summarySum}>
                      {priceDelivery > 0
                        ? `${priceDelivery} Lei`
                        : `Transport gratuit`}
                    </p>
                  </div>
                  <div className={styles.wrap}>
                    <p className={styles.summaryText}>Cost procesare</p>
                    <p className={styles.summarySum}>{processingPrice} Lei</p>
                  </div>
                </div>
                <div className={styles.totalPriceContainer}>
                  <div className={styles.totalPriceWrap}>
                    <p className={styles.totalPriceText}>Total:</p>
                    <p className={styles.totalPriceSum}>
                      {orderFinalPrice.toFixed(2)} Lei
                    </p>
                  </div>
                  <button className={styles.checkoutBtn}>
                    <img
                      className={styles.checkoutImg}
                      src={checkoutBtn}
                      alt="Continua Cumparaturile"
                    />
                    <span className={styles.checkoutText}>Continuă</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerEmptyCart}>
          <div className={styles.emptyCart}>
            <div className={styles.emptyCartWrap}>
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
