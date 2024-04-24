import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Badges from "../../../../components/badges/Badges";
import { API_URL_IMG } from "../../../../api/api-img";
import { calculateDiscountPercentage } from "../../../../utils/discountCalculator";
import Button from "../../../../components/ui/Button/Button";
import content from "../../../../constants/content";
import BtnAddToCart from "../../../../images/adauga-in-cos.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  setModalNoUser,
} from "../../../../features/auth/authSlice";
import favoriteApi from "../../../../api/modules/favorite.api";
import { addToCartReducer } from "../../../../features/cart/cartSlice";

const FavoriteBook = ({ book }) => {
  const { user } = useSelector((state) => state.auth);

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
    console.log(book);
    const { title, subtitle, url, price, oldPrice, mainImageUrl, bookId } =
      book;

    const bookCart = {
      _id: bookId,
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
    <div className={styles.favoriteItem}>
      <div className={styles.bookDetails}>
        <div className={styles.bookImgWrap}>
          <Link to={`/book/${book.bookId}`}>
            <img
              className={styles.bookImg}
              src={`${API_URL_IMG}${book.mainImageUrl}`}
              alt={book.title}
            />
          </Link>
          <Badges />
        </div>
        <Link to={`/book/${book.bookId}`}>
          <p className={styles.bookTitle}>{book.title}</p>
        </Link>
      </div>
      <div className={styles.bookPrice}>
        <div className={styles.bookPriceWrap}>
          <p className={styles.priceAvailability}>In stoc</p>
          <p className={styles.pricesDeduct}>
            <span className={styles.pricesOld}>{book.oldPrice} Lei</span>(
            {-calculateDiscountPercentage(book.oldPrice, book.price)}
            %)
          </p>
          <p className={styles.bookPriceValue}>{book.price} Lei</p>
        </div>
        <Button
          id="add_to_cart"
          type="button"
          className="max-w-220 flex items-center mt-0"
          classNameText="flex-3"
          startIconImage={BtnAddToCart}
          name={content.add_to_cart}
          onClick={() => handleAddToCart(book)}
        />
        <span
          className={styles.btnRemoveToFavorite}
          onClick={() => handleBookDelete(book)}
        >
          Sterge
        </span>
      </div>
    </div>
  );
};

export default FavoriteBook;
