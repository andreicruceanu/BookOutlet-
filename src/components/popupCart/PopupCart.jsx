import { useDispatch, useSelector } from "react-redux";
import { cost } from "../../utils/DeliveryCost";
import Modal from "../modal/Modal";
import ProgressBar from "../progressBar/ProgressBar";
import { closeModal } from "../../features/modalCart/modalCartSlice";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils/images";
import Button from "../ui/Button/Button";
import checkoutBtn from "../../images/continua-finalizeaza-comanda.svg";
import checkoutBtn2 from "../../images/continua-finalizeaza-comanda2.svg";
import CartRecommend from "./CartRecommend/CartRecommend";

function PopupCart() {
  const { isOpen, book } = useSelector((state) => state.modalCart);
  const { cart } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const totalPriceBooks = cart.reduce(
    (total, book) => Number(total) + Number(book.totalPrice),
    0
  );

  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());

  const handleToCart = () => {
    navigate("/cos");
  };

  return (
    book && (
      <Modal
        title="Produsul a fost adăugat în coș"
        titleGreen
        size="large"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className={styles.progressBarContainer}>
          <ProgressBar
            priceBooks={totalPriceBooks}
            freeShippingValue={cost.freeShippingFrom}
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.bookContainer}>
            <Link to={`/book/${book._id}`} className={styles.linkBook}>
              <img src={getImageUrl(book.mainImageUrl)} alt={book.title} />
            </Link>
            <div className={styles.bookName}>
              <Link to={`book/${book._id}`} className={styles.title}>
                {book.title}
              </Link>
              <p>{book.subtitle}</p>
            </div>
            <div className={styles.bookPriceContainer}>
              <p className={styles.oldPrice}>PRP: {book.oldPrice} Lei</p>
              <p className={styles.newPrice}>{book.price} Lei</p>
            </div>
            <div className={styles.btnDetailsWrap}>
              <Button
                name="Vezi detalii în coș"
                className="flex items-center my-0"
                classNameText="w-full text-md"
                startIconImage={checkoutBtn}
                onClick={handleToCart}
              />
              <Button
                name="Continuă cumpărăturile"
                variant="secondary"
                className="flex items-center my-0 border-bold"
                classNameText="w-full text-md blue bold"
                startIconImage={checkoutBtn2}
                onClick={handleClose}
              />
            </div>
          </div>
        </div>
        <CartRecommend bookId={book._id} />
      </Modal>
    )
  );
}
export default PopupCart;
