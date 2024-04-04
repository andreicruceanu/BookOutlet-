import styles from "./styles.module.css";
import CartEmpty from "../../../images/nu-ai-produse-in-cos.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProgressBar from "../../../components/progressBar/ProgressBar";

import BookItem from "../Components/BookItem/BookItem";
import Discount from "../Components/Discount/Discount";
import { cost } from "../../../utils/DeliveryCost";
import CartSummary from "../Components/CartSummary/CartSummary";
import {
  orderFinalPriceCalculated,
  priceDeliveryCalculated,
  priceDeliveryDisplay,
} from "./function";
import content from "../../../constants/content";

function Cart() {
  const { cart } = useSelector((state) => state.cart);

  const discount = cart.reduce(
    (total, book) =>
      Number(total) + Number((book.oldPrice - book.price) * book.quantity),
    0
  );
  const totalPriceBooks = cart.reduce(
    (total, book) => Number(total) + Number(book.totalPrice),
    0
  );

  const priceDelivery = priceDeliveryCalculated(totalPriceBooks);

  const orderFinalPrice = orderFinalPriceCalculated(
    totalPriceBooks,
    priceDelivery
  );

  const data = [
    {
      id: 0,
      name: content.productCost,
      value: `${totalPriceBooks.toFixed(2)} ${content.currency}`,
    },
    {
      id: 1,
      name: content.deliveryCost,
      value: priceDeliveryDisplay(priceDelivery),
    },
    {
      id: 2,
      name: content.processingCost,
      value: `${cost.processingPrice} ${content.currency}`,
    },
    {
      id: 3,
      name: content.subtotal,
      value: `${orderFinalPrice.toFixed(2)} ${content.currency}`,
      isTotal: true,
    },
  ];

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
                freeShippingValue={cost.freeShippingFrom}
              />
              {cart.map((book) => (
                <BookItem book={book} />
              ))}
              <div className={styles.cartItemTotal}>
                {data.map((item) =>
                  item?.isTotal ? (
                    <div className={styles.cartSubtotal}>
                      <p className={styles.cartSubtotalText}>{item.name}</p>
                      <p className={styles.cartSubtotalSum}>{item.value}</p>
                    </div>
                  ) : (
                    <div className={styles.cartItem} key={item.id}>
                      <p className={styles.cartItemText}>{item.name}</p>
                      <p className={styles.cartItemSum}>{item.value}</p>
                    </div>
                  )
                )}
              </div>
              {discount > 0 && (
                <div className={styles.totalDiscount}>
                  Felicitari, ai economisit {discount.toFixed(2)} lei!
                </div>
              )}
            </div>
            <div className={styles.cartAside}>
              <CartSummary
                totalPriceBooks={totalPriceBooks}
                priceDelivery={priceDelivery}
                orderFinalPrice={orderFinalPrice}
              />
              <Discount />
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
