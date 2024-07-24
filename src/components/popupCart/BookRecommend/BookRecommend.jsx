import { Link } from "react-router-dom";
import BookTitle from "../../bookTitle/BookTitle";
import styles from "./styles.module.css";
import { getImageUrl } from "../../../utils/images";
import BookPrice from "../../bookPrice/PriceBook";
import Button from "../../ui/Button/Button";
import BadgesDiscount from "../../badges/BadgesDiscount";
import imgCheck from "../../../images/check-img.png";
import { useState } from "react";
import { addToCartReducer } from "../../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkBookCart } from "../../../utils/checkBookCart";
function BookRecommend({
  badges,
  rating,
  title,
  subtitle,
  oldPrice,
  price,
  mainImageUrl,
  _id,
  url,
}) {
  const { cart } = useSelector((state) => state.cart);
  const [isBookInCart, setIsBookInCart] = useState(checkBookCart(cart, _id));

  const dispatch = useDispatch();

  const handleAddToCart = () => {
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
    setIsBookInCart(true);
  };

  return (
    <>
      <img
        src={imgCheck}
        alt="img check"
        className={`${styles.imgCheck} ${
          isBookInCart ? styles.visibleImage : styles.hiddenImage
        }`}
      />
      <div
        className={`${styles.bookContainer} ${
          isBookInCart ? styles.hiddenBook : ""
        }`}
      >
        <Link className={styles.imgWrap} to={`/book/${_id}`}>
          <picture>
            <img
              className={styles.bookImage}
              src={getImageUrl(mainImageUrl)}
              alt={title}
            />
          </picture>
        </Link>
        <BadgesDiscount
          oldPrice={oldPrice}
          price={price}
          leftPosition={"10px"}
          bottomPosition={"210px"}
        />
        <BookTitle title={title} id={_id} />
        <div className={styles.wrapPrice}>
          <BookPrice oldPrice={oldPrice} price={price} />
        </div>
        <Button
          className="blue"
          variant="secondary"
          name="Adaugă în coș"
          size="small"
          onClick={handleAddToCart}
        />
      </div>
    </>
  );
}
export default BookRecommend;
